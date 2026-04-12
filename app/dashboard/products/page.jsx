import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2 } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    { id: 1, name: 'Velvet Cloud Sofa', category: 'Living Room', price: '$1,299', stock: 45, status: 'Active', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=200&auto=format&fit=crop' },
    { id: 2, name: 'Art Deco Pendant', category: 'Lighting', price: '$249', stock: 12, status: 'Low Stock', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=200&auto=format&fit=crop' },
    { id: 3, name: 'Walnut Nightstand', category: 'Bedroom', price: '$399', stock: 85, status: 'Active', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=200&auto=format&fit=crop' },
    { id: 4, name: 'Luminous Arts Lamp', category: 'Lighting', price: '$189', stock: 0, status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=200&auto=format&fit=crop' },
    { id: 5, name: 'Nordic Lounge Chair', category: 'Living Room', price: '$789', stock: 34, status: 'Active', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Products Management</h1>
          <p className="text-zinc-500 mt-1">Manage your catalog, inventory, and pricing.</p>
        </div>
        <button className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-amber-600/20 active:scale-95 flex items-center gap-2">
          <Plus className="w-5 h-5" /> Add Product
        </button>
      </div>

      <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-zinc-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-zinc-50/50">
          <div className="relative w-full sm:w-96 flex items-center">
            <Search className="w-5 h-5 absolute left-3 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-10 pr-4 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-zinc-200 bg-white rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 text-zinc-500 text-xs uppercase tracking-wider font-bold">
                <th className="p-4 border-b border-zinc-200">Product</th>
                <th className="p-4 border-b border-zinc-200">Category</th>
                <th className="p-4 border-b border-zinc-200">Price</th>
                <th className="p-4 border-b border-zinc-200">Stock</th>
                <th className="p-4 border-b border-zinc-200">Status</th>
                <th className="p-4 border-b border-zinc-200 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-zinc-50/80 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-zinc-100 overflow-hidden border border-zinc-200 flex-shrink-0">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <span className="font-bold text-zinc-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-zinc-500 text-sm">{product.category}</td>
                  <td className="p-4 font-medium text-zinc-900">{product.price}</td>
                  <td className="p-4 text-zinc-600 text-sm">{product.stock}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                      product.status === 'Active' ? 'bg-green-100 text-green-700' :
                      product.status === 'Low Stock' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 text-zinc-400">
                      <button className="p-1.5 hover:bg-zinc-100 hover:text-amber-600 rounded-md transition-colors"><Edit className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-zinc-100 hover:text-red-600 rounded-md transition-colors"><Trash2 className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors"><MoreHorizontal className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-zinc-200 text-center sm:text-left text-sm text-zinc-500 bg-zinc-50/50">
          Showing 1 to 5 of 24 products
        </div>
      </div>
    </div>
  );
}
