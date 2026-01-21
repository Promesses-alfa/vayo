"use client";

import { useState } from "react";
import { X, Send, Mail, User, Calendar, FileText, CheckCircle2 } from "lucide-react";
import { Artist } from "@/lib/vayo-data";

interface WelcomeEmailModalProps {
  artist: Artist | null;
  isOpen: boolean;
  onClose: () => void;
  onSend?: (data: { artistId: string; subject: string; message: string }) => void;
  senderType: "agency" | "label";
}

export default function WelcomeEmailModal({ 
  artist, 
  isOpen, 
  onClose, 
  onSend,
  senderType 
}: WelcomeEmailModalProps) {
  const [subject, setSubject] = useState(`Welcome to ${senderType === "agency" ? "Dutch Dance Agency" : "VAYO Records"}!`);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  if (!isOpen || !artist) return null;

  const defaultMessage = senderType === "agency" 
    ? `Dear ${artist.name},

Welcome to Dutch Dance Agency! We're thrilled to have you join our roster.

Here's what happens next:
1. You'll receive access to your VAYO artist dashboard
2. We'll schedule an onboarding call to discuss your booking preferences
3. You can upload your technical rider and press materials

Your dedicated agent will be in touch shortly.

Best regards,
The Dutch Dance Agency Team`
    : `Dear ${artist.name},

Welcome to VAYO Records! We're excited to work with you.

Here's what you can expect:
1. Access to your artist dashboard with release planning tools
2. Social media coordination with our marketing team
3. Real-time analytics and royalty tracking

Let's make great music together!

Best regards,
The VAYO Records Team`;

  const [message, setMessage] = useState(defaultMessage);

  const handleSend = async () => {
    setSending(true);
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSending(false);
    setSent(true);
    onSend?.({ artistId: artist.id, subject, message });
    
    // Reset after showing success
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[90vh] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              senderType === "agency" ? "bg-[#00d4aa]/10 text-[#00d4aa]" : "bg-[#3b82f6]/10 text-[#3b82f6]"
            }`}>
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Send Welcome Email</h2>
              <p className="text-sm text-gray-500">to {artist.name}</p>
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
          {sent ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Sent!</h3>
              <p className="text-gray-500 text-center">
                Welcome email has been sent to {artist.email}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Recipient Info */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                  {artist.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{artist.name}</p>
                  <p className="text-sm text-gray-500">{artist.email}</p>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-300 font-medium"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={12}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-300 font-medium resize-none"
                />
              </div>

              {/* Attachments */}
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Automatic Attachments</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span>Platform onboarding guide (PDF)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>Dashboard access link</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <User className="w-4 h-4 text-gray-400" />
                    <span>Account credentials (secure)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {!sent && (
          <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 font-medium hover:text-gray-900 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSend}
              disabled={sending || !subject || !message}
              className={`px-6 py-2 rounded-xl font-bold text-white flex items-center gap-2 transition-all ${
                senderType === "agency" 
                  ? "bg-[#00d4aa] hover:bg-[#00b894]" 
                  : "bg-[#3b82f6] hover:bg-[#2563eb]"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {sending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Welcome Email
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
