'use client';
import { useState } from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Arts and Humanities', slug: 'arts-humanities' },
  { name: 'Business', slug: 'business' },
  { name: 'Computing', slug: 'computing' },
  { name: 'Design and Environment', slug: 'design-environment' },
  { name: 'Engineering', slug: 'engineering' },
  { name: 'Healthcare', slug: 'healthcare' },
  { name: 'Law and Policy', slug: 'law-policy' },
  { name: 'Mathematics and Science', slug: 'mathematics-science' },
  { name: 'Social Sciences', slug: 'social-sciences' },
];

const universities = ['NUS','NTU','SMU','SUTD','SIT','SUSS'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);
  const [uniOpen, setUniOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <img src="https://upathsg.org/wp-content/themes/divi-child/pink_logo1.png" alt="UPATH SG" className="h-10 w-10" />
          <span className="font-bold text-navy hidden sm:block text-sm tracking-wide">UPATH SG</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-navy">
          <Link href="/" className="hover:text-teal transition-colors">Home</Link>

          <div className="relative group">
            <button className="hover:text-teal transition-colors flex items-center gap-1">Articles <span className="text-xs">▾</span></button>
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-xl py-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              {categories.map(c => (
                <Link key={c.slug} href={`/category/${c.slug}`} className="block px-4 py-2 hover:bg-peach hover:text-teal text-sm">{c.name}</Link>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-teal transition-colors flex items-center gap-1">Universities <span className="text-xs">▾</span></button>
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-xl py-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              {universities.map(u => (
                <Link key={u} href={`/university/${u.toLowerCase()}`} className="block px-4 py-2 hover:bg-peach hover:text-teal text-sm">{u}</Link>
              ))}
            </div>
          </div>

          <Link href="/whats-on" className="hover:text-teal transition-colors">What's On</Link>
          <Link href="/about" className="hover:text-teal transition-colors">About Us</Link>
          <Link href="/#contact" className="bg-pink text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-xs">Share Your Story</Link>
        </div>

        <button className="md:hidden text-navy text-xl" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3 text-sm font-semibold text-navy">
          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <button className="text-left flex justify-between" onClick={() => setArticlesOpen(!articlesOpen)}>Articles <span>{articlesOpen ? '▴' : '▾'}</span></button>
          {articlesOpen && <div className="pl-4 flex flex-col gap-2">{categories.map(c => <Link key={c.slug} href={`/category/${c.slug}`} onClick={() => setMobileOpen(false)} className="text-gray-500 font-normal">{c.name}</Link>)}</div>}
          <button className="text-left flex justify-between" onClick={() => setUniOpen(!uniOpen)}>Universities <span>{uniOpen ? '▴' : '▾'}</span></button>
          {uniOpen && <div className="pl-4 flex flex-col gap-2">{universities.map(u => <Link key={u} href={`/university/${u.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="text-gray-500 font-normal">{u}</Link>)}</div>}
          <Link href="/whats-on" onClick={() => setMobileOpen(false)}>What's On</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)}>About Us</Link>
          <Link href="/#contact" onClick={() => setMobileOpen(false)} className="bg-pink text-white px-4 py-2 rounded-full text-center">Share Your Story</Link>
        </div>
      )}
    </nav>
  );
}