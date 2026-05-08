import React, { useState } from 'react';
import { portfolioData } from '../../data';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const DisplayData = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header & Search */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-[600px]"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Product Catalog</span>
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">
              Detailed <span className="text-primary">Product Information</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-[400px] relative group"
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-textLight group-focus-within:text-primary transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search by Brand Name, Generic Name, Dosage Form..."
              className="w-full pl-11 pr-4 py-3.5 bg-section border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
              value={searchTerm}
              onChange={handleSearch}
            />
          </motion.div>
        </div>

        {/* Data Tables */}
        <div className="space-y-16">
          {portfolioData.map((categoryData, index) => {
            const filteredProducts = categoryData.products.filter(item =>
              (item.brandName?.toLowerCase() || '').includes(searchTerm) ||
              (item.genericName?.toLowerCase() || '').includes(searchTerm) ||
              (item.dosageForm?.toLowerCase() || '').includes(searchTerm) ||
              (item.pack?.toLowerCase() || '').includes(searchTerm)
            );

            if (filteredProducts.length === 0) return null;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
              >
                {/* Category Header */}
                <div className="bg-gradient-to-r from-section to-white px-6 py-5 border-b border-border flex items-center">
                  <div className="w-1.5 h-6 bg-primary rounded-full mr-4"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-textPrimary">
                    {categoryData.category}
                  </h3>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="bg-section text-textSecondary text-[13px] uppercase tracking-wider font-semibold">
                        <th className="px-6 py-4 border-b border-border w-[25%] min-w-[150px]">Brand Name</th>
                        <th className="px-6 py-4 border-b border-border w-[40%] min-w-[250px]">Generic Name</th>
                        <th className="px-6 py-4 border-b border-border w-[25%] min-w-[150px]">Dosage Form</th>
                        <th className="px-6 py-4 border-b border-border w-[15%] min-w-[100px]">Pack</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-[15px] text-textSecondary">
                      {filteredProducts.map((item, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-primary/[0.02] transition-colors duration-200 group"
                        >
                          <td className="px-6 py-4 font-semibold text-textPrimary group-hover:text-primary transition-colors">
                            {item.brandName}
                          </td>
                          <td className="px-6 py-4 leading-relaxed">
                            {item.genericName}
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                              {item.dosageForm}
                            </span>
                          </td>
                          <td className="px-6 py-4 font-medium text-textPrimary">
                            {item.pack}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            );
          })}

          {portfolioData.every(cat =>
            cat.products.filter(item =>
              (item.brandName?.toLowerCase() || '').includes(searchTerm) ||
              (item.genericName?.toLowerCase() || '').includes(searchTerm) ||
              (item.dosageForm?.toLowerCase() || '').includes(searchTerm) ||
              (item.pack?.toLowerCase() || '').includes(searchTerm)
            ).length === 0
          ) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-section rounded-2xl border border-dashed border-border"
              >
                <Search className="w-10 h-10 text-textLight mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-bold text-textPrimary mb-2">No products found</h3>
                <p className="text-textSecondary">
                  We couldn't find any products matching "{searchTerm}". Try adjusting your search.
                </p>
              </motion.div>
            )}
        </div>
      </div>
    </section>
  );
};

export default DisplayData;
