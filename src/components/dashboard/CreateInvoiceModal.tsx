"use client";

import { useState } from "react";
import { X, Plus, Trash2, Send, Download, CheckCircle2, DollarSign } from "lucide-react";
import { Booking, COMPANY_INFO, formatCurrency, formatDate } from "@/lib/vayo-data";

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

interface CreateInvoiceModalProps {
  booking?: Booking | null;
  isOpen: boolean;
  onClose: () => void;
  onSave?: (invoice: {
    items: InvoiceItem[];
    client: string;
    clientEmail: string;
    notes: string;
    dueDate: string;
  }) => void;
}

export default function CreateInvoiceModal({ 
  booking,
  isOpen, 
  onClose, 
  onSave 
}: CreateInvoiceModalProps) {
  const [items, setItems] = useState<InvoiceItem[]>(
    booking ? [
      { 
        id: "1", 
        description: `Performance fee - ${booking.artistName} at ${booking.venue}`, 
        quantity: 1, 
        unitPrice: booking.fee 
      }
    ] : []
  );
  const [client, setClient] = useState(booking?.promoter || "");
  const [clientEmail, setClientEmail] = useState(booking?.promoterEmail || "");
  const [notes, setNotes] = useState("Payment terms: 50% deposit upon signing, 50% on day of performance.");
  const [dueDate, setDueDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date.toISOString().split("T")[0];
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now().toString(), description: "", quantity: 1, unitPrice: 0 }
    ]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
  const vatRate = 21;
  const vatAmount = subtotal * (vatRate / 100);
  const total = subtotal + vatAmount;

  const handleSave = async () => {
    setSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSaving(false);
    setSaved(true);
    onSave?.({ items, client, clientEmail, notes, dueDate });
    
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 2000);
  };

  const generateInvoiceNumber = () => {
    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2, "0");
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
    return `INV-${year}${month}-${random}`;
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:max-h-[90vh] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Create Invoice</h2>
              <p className="text-sm text-gray-500">{generateInvoiceNumber()}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {saved ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Invoice Created!</h3>
              <p className="text-gray-500 text-center">
                Invoice has been saved and is ready to send.
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left: Form */}
              <div className="space-y-6">
                {/* From */}
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">From</h4>
                  <p className="text-sm text-gray-600">{COMPANY_INFO.legalName}</p>
                  <p className="text-sm text-gray-600">{COMPANY_INFO.address.street}</p>
                  <p className="text-sm text-gray-600">{COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}</p>
                  <p className="text-sm text-gray-600 mt-2">VAT: {COMPANY_INFO.vatNumber}</p>
                </div>

                {/* To */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Bill To
                  </label>
                  <input
                    type="text"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    placeholder="Client name / company"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-300 font-medium mb-3"
                  />
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="Client email"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-300 font-medium"
                  />
                </div>

                {/* Due Date */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Due Date
                  </label>
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-300 font-medium"
                  />
                </div>

                {/* Items */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-bold text-gray-700">
                      Line Items
                    </label>
                    <button
                      onClick={addItem}
                      className="text-sm font-medium text-[#00d4aa] hover:underline flex items-center gap-1"
                    >
                      <Plus className="w-4 h-4" />
                      Add item
                    </button>
                  </div>
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => updateItem(item.id, "description", e.target.value)}
                          placeholder="Description"
                          className="flex-1 px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-300 font-medium text-sm"
                        />
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateItem(item.id, "quantity", parseInt(e.target.value) || 1)}
                          min="1"
                          className="w-20 px-3 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-300 font-medium text-sm text-center"
                        />
                        <input
                          type="number"
                          value={item.unitPrice}
                          onChange={(e) => updateItem(item.id, "unitPrice", parseFloat(e.target.value) || 0)}
                          min="0"
                          step="0.01"
                          placeholder="Price"
                          className="w-28 px-3 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-300 font-medium text-sm"
                        />
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-3 text-gray-400 hover:text-red-500 transition-colors"
                          disabled={items.length === 1}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Notes / Payment Terms
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-300 font-medium text-sm resize-none"
                  />
                </div>
              </div>

              {/* Right: Preview */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Preview</h4>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  {/* Invoice Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="w-10 h-10 bg-gradient-to-br from-[#00d4aa] to-emerald-600 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-white font-bold">V</span>
                      </div>
                      <p className="text-xs text-gray-500">INVOICE</p>
                      <p className="text-xs font-mono text-gray-400">{generateInvoiceNumber()}</p>
                    </div>
                    <div className="text-right text-xs text-gray-500">
                      <p>{COMPANY_INFO.legalName}</p>
                      <p>{COMPANY_INFO.address.street}</p>
                      <p>{COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}</p>
                    </div>
                  </div>

                  {/* Bill To */}
                  <div className="mb-6">
                    <p className="text-xs text-gray-400 mb-1">BILL TO</p>
                    <p className="text-sm font-semibold text-gray-900">{client || "Client name"}</p>
                    <p className="text-xs text-gray-500">{clientEmail || "client@email.com"}</p>
                  </div>

                  {/* Items */}
                  <div className="border-t border-gray-100 pt-4 mb-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm py-1">
                        <span className="text-gray-600 truncate flex-1 mr-4">{item.description || "Item"}</span>
                        <span className="text-gray-900 font-medium">
                          {formatCurrency(item.quantity * item.unitPrice, "EUR")}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div className="border-t border-gray-100 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="text-gray-900">{formatCurrency(subtotal, "EUR")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">VAT ({vatRate}%)</span>
                      <span className="text-gray-900">{formatCurrency(vatAmount, "EUR")}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-100">
                      <span className="text-gray-900">Total</span>
                      <span className="text-[#00d4aa]">{formatCurrency(total, "EUR")}</span>
                    </div>
                  </div>

                  {/* Due Date */}
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500">
                      Due by <span className="font-semibold text-gray-900">{formatDate(dueDate)}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {!saved && (
          <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 font-medium hover:text-gray-900 transition-colors"
            >
              Cancel
            </button>
            <div className="flex gap-3">
              <button
                className="px-4 py-2 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 flex items-center gap-2 hover:bg-gray-50 transition-all"
              >
                <Download className="w-4 h-4" />
                Save as Draft
              </button>
              <button
                onClick={handleSave}
                disabled={saving || !client || items.some(i => !i.description || i.unitPrice === 0)}
                className="px-6 py-2 bg-[#00d4aa] rounded-xl font-bold text-white flex items-center gap-2 hover:bg-[#00b894] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Create & Send
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
