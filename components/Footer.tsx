export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-slate-100 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">© Copyright 2015 by <span className="font-medium">Garber Bros, Inc.</span>. All Rights Reserved.</div>
        <div className="flex items-center gap-6 mt-3 md:mt-0">
          <a href="/transparency-in-coverage" className="text-sm" style={{ color: '#777777' }}>Transparency in Coverage</a>
          <a href="http://www.goodhiring.com/garberbrosinc/apply/open" className="text-sm underline">Apply (GoodHiring)</a>
          <a href="contact.aspx" className="text-sm underline">Contact (legacy)</a>
        </div>
      </div>
    </footer>
  );
}
