"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Send, CheckCircle, Clock, AlertCircle, FileText, Calendar, User, Building, DollarSign, CreditCard, Printer } from "lucide-react";

interface Invoice {
  id: string;
  description: string;
  client: string;
  artist: string;
  showDate: string;
  amount: number;
  status: "paid" | "pending" | "overdue" | "draft";
  issueDate: string;
  dueDate: string;
  paidDate?: string;
}

interface InvoiceModalProps {
  invoice: Invoice | null;
  isOpen: boolean;
  onClose: () => void;
  onMarkPaid?: () => void;
  onSend?: () => void;
}

export default function InvoiceModal({ invoice, isOpen, onClose, onMarkPaid, onSend }: InvoiceModalProps) {
  if (!invoice) return null;

  const formatDate = (dateStr: string | null | undefined) => {
    if (!dateStr) return "-";
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const statusConfig: Record<string, { color: string; icon: React.ElementType; label: string }> = {
    paid: { color: "bg-emerald-500/20 text-emerald-500", icon: CheckCircle, label: "Paid" },
    pending: { color: "bg-yellow-500/20 text-yellow-500", icon: Clock, label: "Pending" },
    overdue: { color: "bg-red-500/20 text-red-500", icon: AlertCircle, label: "Overdue" },
    draft: { color: "bg-[var(--vayo-gray-700)] text-[var(--vayo-gray-400)]", icon: FileText, label: "Draft" },
  };

  const status = statusConfig[invoice.status];
  const StatusIcon = status.icon;

  // Calculate VAT
  const subtotal = invoice.amount;
  const vatRate = 0.21;
  const vatAmount = subtotal * vatRate;
  const total = subtotal + vatAmount;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl md:max-h-[90vh] bg-[var(--vayo-dark)] border border-[var(--vayo-gray-800)] rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[var(--vayo-gray-800)]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{invoice.id}</h2>
                  <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${status.color}`}>
                    <StatusIcon className="w-3 h-3" />
                    {status.label}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[var(--vayo-gray-800)] rounded-lg text-[var(--vayo-gray-400)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Invoice Preview */}
              <div className="bg-white rounded-xl p-8 text-black mb-6">
                {/* Invoice Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-xl">V</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">INVOICE</h3>
                    <p className="text-gray-500">{invoice.id}</p>
                  </div>
                  <div className="text-right">
                    <h4 className="font-bold text-gray-900">VAYO Artist Management</h4>
                    <p className="text-sm text-gray-600">Herengracht 123</p>
                    <p className="text-sm text-gray-600">1015 BD Amsterdam</p>
                    <p className="text-sm text-gray-600">Netherlands</p>
                    <p className="text-sm text-gray-600 mt-2">VAT: NL123456789B01</p>
                  </div>
                </div>

                {/* Bill To / Invoice Details */}
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Bill To</h5>
                    <p className="font-semibold text-gray-900">{invoice.client}</p>
                    <p className="text-sm text-gray-600">Event Organizer</p>
                  </div>
                  <div className="text-right">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                      <p className="text-gray-500">Issue Date:</p>
                      <p className="text-gray-900 font-medium">{formatDate(invoice.issueDate)}</p>
                      <p className="text-gray-500">Due Date:</p>
                      <p className="text-gray-900 font-medium">{formatDate(invoice.dueDate)}</p>
                      {invoice.paidDate && (
                        <>
                          <p className="text-gray-500">Paid Date:</p>
                          <p className="text-emerald-600 font-medium">{formatDate(invoice.paidDate)}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Line Items */}
                <table className="w-full mb-8">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 text-xs font-semibold text-gray-500 uppercase">Description</th>
                      <th className="text-right py-3 text-xs font-semibold text-gray-500 uppercase">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4">
                        <p className="font-medium text-gray-900">{invoice.description}</p>
                        <p className="text-sm text-gray-500">Artist: {invoice.artist}</p>
                        <p className="text-sm text-gray-500">Event Date: {formatDate(invoice.showDate)}</p>
                      </td>
                      <td className="text-right py-4 font-medium text-gray-900">€{subtotal.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>

                {/* Totals */}
                <div className="flex justify-end">
                  <div className="w-64">
                    <div className="flex justify-between py-2 text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-900">€{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-2 text-sm">
                      <span className="text-gray-600">VAT (21%)</span>
                      <span className="text-gray-900">€{vatAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-3 border-t-2 border-gray-900 text-lg font-bold">
                      <span className="text-gray-900">Total</span>
                      <span className="text-gray-900">€{total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Info */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h5 className="text-xs font-semibold text-gray-500 uppercase mb-3">Payment Information</h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Bank</p>
                      <p className="text-gray-900">ING Bank</p>
                    </div>
                    <div>
                      <p className="text-gray-500">IBAN</p>
                      <p className="text-gray-900">NL91 INGB 0001 2345 67</p>
                    </div>
                    <div>
                      <p className="text-gray-500">BIC/SWIFT</p>
                      <p className="text-gray-900">INGBNL2A</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Reference</p>
                      <p className="text-gray-900">{invoice.id}</p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
                  <p>Thank you for your business!</p>
                  <p>Payment is due within 14 days of invoice date.</p>
                </div>
              </div>

              {/* Status Info */}
              <div className="bg-[var(--vayo-gray-900)] rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Invoice Status</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--vayo-gray-400)]">Status</span>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${status.color}`}>
                      <StatusIcon className="w-4 h-4" />
                      {status.label}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--vayo-gray-400)]">Amount Due</span>
                    <span className="text-white font-bold text-xl">€{total.toLocaleString()}</span>
                  </div>
                  {invoice.status === "overdue" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <p className="text-red-400 text-sm">
                        This invoice is overdue. Consider sending a reminder to the client.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-[var(--vayo-gray-800)] bg-[var(--vayo-darker)]">
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={onClose}
                  className="btn-secondary text-sm py-2.5"
                >
                  Close
                </button>
                <button className="btn-secondary text-sm py-2.5">
                  <Printer className="w-4 h-4" />
                  Print
                </button>
                <button className="btn-secondary text-sm py-2.5">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                {invoice.status === "draft" && onSend && (
                  <button onClick={onSend} className="btn-primary text-sm py-2.5">
                    <Send className="w-4 h-4" />
                    Send Invoice
                  </button>
                )}
                {(invoice.status === "pending" || invoice.status === "overdue") && onMarkPaid && (
                  <button onClick={onMarkPaid} className="btn-primary text-sm py-2.5">
                    <CreditCard className="w-4 h-4" />
                    Mark as Paid
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
