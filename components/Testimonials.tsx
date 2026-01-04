
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
      {TESTIMONIALS.map((t, idx) => (
        <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border-2 border-rose-gold" />
            <div>
              <h4 className="font-bold text-purple-deep">{t.name}</h4>
              <p className="text-xs text-gray-500">{t.role}</p>
            </div>
          </div>
          <p className="text-gray-700 italic">"{t.text}"</p>
          <div className="mt-4 flex text-yellow-400">
            {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
