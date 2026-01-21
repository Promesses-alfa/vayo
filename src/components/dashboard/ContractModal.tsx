"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Send, CheckCircle, Clock, FileText, Pen, Calendar, User, Building, DollarSign } from "lucide-react";

interface Contract {
  id: string;
  title: string;
  artist: string;
  promoter: string;
  showDate: string;
  value: number;
  status: string;
  sentDate: string | null;
  signedDate: string | null;
}

interface ContractModalProps {
  contract: Contract | null;
  isOpen: boolean;
  onClose: () => void;
  onSign?: () => void;
  onSend?: () => void;
}

export default function ContractModal({ contract, isOpen, onClose, onSign, onSend }: ContractModalProps) {
  if (!contract) return null;

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "-";
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const statusColors: Record<string, string> = {
    signed: "bg-emerald-500/20 text-emerald-500",
    awaiting_signature: "bg-yellow-500/20 text-yellow-500",
    draft: "bg-[var(--vayo-gray-700)] text-[var(--vayo-gray-400)]",
  };

  const statusLabels: Record<string, string> = {
    signed: "Signed",
    awaiting_signature: "Awaiting Signature",
    draft: "Draft",
  };

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
                <div className="w-12 h-12 rounded-xl bg-[var(--vayo-accent)]/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[var(--vayo-accent)]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{contract.id}</h2>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[contract.status]}`}>
                    {statusLabels[contract.status]}
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
              {/* Contract Title */}
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                {contract.title}
              </h3>

              {/* Contract Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[var(--vayo-gray-900)] rounded-xl p-4">
                  <div className="flex items-center gap-2 text-[var(--vayo-gray-500)] mb-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm">Artist</span>
                  </div>
                  <p className="text-white font-semibold">{contract.artist}</p>
                </div>
                <div className="bg-[var(--vayo-gray-900)] rounded-xl p-4">
                  <div className="flex items-center gap-2 text-[var(--vayo-gray-500)] mb-2">
                    <Building className="w-4 h-4" />
                    <span className="text-sm">Promoter</span>
                  </div>
                  <p className="text-white font-semibold">{contract.promoter}</p>
                </div>
                <div className="bg-[var(--vayo-gray-900)] rounded-xl p-4">
                  <div className="flex items-center gap-2 text-[var(--vayo-gray-500)] mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Show Date</span>
                  </div>
                  <p className="text-white font-semibold">{formatDate(contract.showDate)}</p>
                </div>
                <div className="bg-[var(--vayo-gray-900)] rounded-xl p-4">
                  <div className="flex items-center gap-2 text-[var(--vayo-gray-500)] mb-2">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">Contract Value</span>
                  </div>
                  <p className="text-[var(--vayo-accent)] font-bold text-xl">€{contract.value.toLocaleString()}</p>
                </div>
              </div>

              {/* Contract Preview */}
              <div className="bg-[var(--vayo-gray-900)] rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">Contract Preview</h4>
                <div className="bg-white rounded-lg p-6 text-black">
                  <div className="text-center mb-6">
                    <h5 className="text-2xl font-bold mb-2">PERFORMANCE AGREEMENT</h5>
                    <p className="text-gray-600">Contract Reference: {contract.id}</p>
                  </div>
                  
                  <div className="space-y-4 text-sm">
                    <p><strong>This Agreement</strong> is entered into as of {formatDate(contract.sentDate || contract.showDate)}</p>
                    
                    <div className="border-t pt-4">
                      <p className="font-semibold">BETWEEN:</p>
                      <p><strong>Artist/Performer:</strong> {contract.artist}</p>
                      <p><strong>Represented by:</strong> VAYO Artist Management</p>
                    </div>
                    
                    <div className="border-t pt-4">
                      <p className="font-semibold">AND:</p>
                      <p><strong>Promoter/Venue:</strong> {contract.promoter}</p>
                    </div>
                    
                    <div className="border-t pt-4">
                      <p className="font-semibold">PERFORMANCE DETAILS:</p>
                      <p><strong>Date:</strong> {formatDate(contract.showDate)}</p>
                      <p><strong>Fee:</strong> €{contract.value.toLocaleString()} (excluding VAT)</p>
                      <p><strong>Payment Terms:</strong> 50% deposit upon signing, 50% on day of performance</p>
                    </div>
                    
                    <div className="border-t pt-4">
                      <p className="font-semibold">TERMS & CONDITIONS:</p>
                      <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>The Artist agrees to perform for a minimum of 90 minutes.</li>
                        <li>Technical requirements as per attached rider.</li>
                        <li>Cancellation policy: Full refund if cancelled 30+ days before event.</li>
                        <li>The Promoter shall provide adequate backstage facilities.</li>
                        <li>This agreement is governed by Dutch law.</li>
                      </ol>
                    </div>

                    <div className="border-t pt-6 mt-6">
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <p className="font-semibold mb-4">For the Artist:</p>
                          <div className="border-b-2 border-gray-400 h-12 mb-2" />
                          <p className="text-xs text-gray-500">Signature</p>
                          {contract.status === "signed" && (
                            <div className="mt-2 flex items-center gap-2 text-emerald-600">
                              <CheckCircle className="w-4 h-4" />
                              <span className="text-xs">Signed on {formatDate(contract.signedDate)}</span>
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold mb-4">For the Promoter:</p>
                          <div className="border-b-2 border-gray-400 h-12 mb-2" />
                          <p className="text-xs text-gray-500">Signature</p>
                          {contract.status === "signed" && (
                            <div className="mt-2 flex items-center gap-2 text-emerald-600">
                              <CheckCircle className="w-4 h-4" />
                              <span className="text-xs">Signed on {formatDate(contract.signedDate)}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-[var(--vayo-gray-900)] rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Contract Timeline</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Contract Created</p>
                      <p className="text-sm text-[var(--vayo-gray-500)]">Draft generated</p>
                    </div>
                  </div>
                  {contract.sentDate && (
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Send className="w-4 h-4 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Sent for Signature</p>
                        <p className="text-sm text-[var(--vayo-gray-500)]">{formatDate(contract.sentDate)}</p>
                      </div>
                    </div>
                  )}
                  {contract.signedDate && (
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Contract Signed</p>
                        <p className="text-sm text-[var(--vayo-gray-500)]">{formatDate(contract.signedDate)}</p>
                      </div>
                    </div>
                  )}
                  {contract.status === "awaiting_signature" && (
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-yellow-500" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Awaiting Signature</p>
                        <p className="text-sm text-[var(--vayo-gray-500)]">Pending response from parties</p>
                      </div>
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
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                {contract.status === "draft" && onSend && (
                  <button onClick={onSend} className="btn-primary text-sm py-2.5">
                    <Send className="w-4 h-4" />
                    Send for Signature
                  </button>
                )}
                {contract.status === "awaiting_signature" && onSign && (
                  <button onClick={onSign} className="btn-primary text-sm py-2.5">
                    <Pen className="w-4 h-4" />
                    Sign Contract
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
