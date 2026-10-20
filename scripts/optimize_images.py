"""Generate responsive WebP/AVIF derivatives from baseline-source/Image into public/images.
Usage: python3 -I scripts/optimize_images.py   (needs Pillow; AVIF only if plugin present)"""
import os, json
from PIL import Image, ImageOps
SRC='baseline-source/Image'; OUT='public/images'
try:
    import pillow_avif  # noqa
    AVIF=True
except Exception:
    AVIF='AVIF' in Image.registered_extensions().values()
jobs={ # name: (src, widths)
 'profile':('profile.jpg',[400,800]),
 'moto-s':('moto-s.png',[640,1100]),
 'between':('between.png',[640,1100]),
 'miet':('miet.png',[700,1400]),
 'ccsu':('ccsu.png',[385]),
}
g=sorted(os.listdir(f'{SRC}/gallery-photo'))
for i,f in enumerate(g,1):
    jobs[f'gallery-{i:02d}']=(f'gallery-photo/{f}',[480,960,1600])
manifest={}
for name,(src,widths) in jobs.items():
    im=ImageOps.exif_transpose(Image.open(f'{SRC}/{src}')).convert('RGB')
    manifest[name]={'src':src,'orig':im.size,'files':[]}
    for w in sorted({min(w,im.width) for w in widths}):
        h=round(im.height*w/im.width); r=im.resize((w,h),Image.LANCZOS)
        p=f'{OUT}/{name}-{w}.webp'; r.save(p,'WEBP',quality=78,method=6)
        manifest[name]['files'].append([p,w,h,os.path.getsize(p)])
        if AVIF:
            p=f'{OUT}/{name}-{w}.avif'; r.save(p,'AVIF',quality=55)
            manifest[name]['files'].append([p,w,h,os.path.getsize(p)])
# keep legacy public URLs for SEO/OG identity
Image.open(f'{SRC}/favicon.png').save('public/Image/favicon.png',optimize=True)
og=Image.open(f'{SRC}/shareable.png').convert('RGB'); og.save('public/Image/shareable.jpg','JPEG',quality=82,optimize=True)
og.convert('P',palette=Image.ADAPTIVE,colors=256).save('public/Image/shareable.png',optimize=True)
os.makedirs('src/data',exist_ok=True)
compact={n:{'w':m['orig'][0],'h':m['orig'][1],'widths':sorted({f[1] for f in m['files']})} for n,m in manifest.items()}
json.dump(compact,open('src/data/image-manifest.json','w'),indent=1)
json.dump({'avif':bool(AVIF),'images':manifest},open('scripts/image-manifest.json','w'),indent=1)
print('avif',AVIF)
