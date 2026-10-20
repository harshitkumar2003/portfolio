const labels = ['ENGINEERING WITH PURPOSE', 'DESIGNING BEYOND THE ORDINARY', "BUILDING WHAT’S NEXT", 'TURNING IDEAS INTO INTELLIGENCE', 'CRAFTING DIGITAL EXCELLENCE'];
export function Ticker() {
  return <div className="word-marquee" aria-label="Creative approach"><div className="word-marquee__track">
    {[0, 1].map((copy) => <div className="word-marquee__group" key={copy} aria-hidden={copy === 1}>
      {labels.map((label) => <span key={label}>{label}<i aria-hidden="true"> ✦ </i></span>)}
    </div>)}
  </div></div>;
}
