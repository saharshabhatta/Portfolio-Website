import { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, router } from '@inertiajs/react';
import {
    Mail,
    MailOpen,
    Trash2,
    CheckCircle2,
    Eye,
    X,
    Reply,
    Clock,
    User,
    Inbox,
} from 'lucide-react';
import { ContactMessage } from '@/types';

interface MessagesIndexProps {
    messages: {
        data: ContactMessage[];
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
        total: number;
    };
    filter: string;
    unreadCount: number;
}

export default function MessagesIndex({
    messages,
    filter,
    unreadCount,
}: MessagesIndexProps) {
    const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(
        null
    );

    const toggleReadStatus = (msg: ContactMessage) => {
        router.patch(route('admin.messages.toggle-read', msg.id));
    };

    const handleDelete = (msg: ContactMessage) => {
        if (confirm(`Delete message from ${msg.name}?`)) {
            if (selectedMessage?.id === msg.id) {
                setSelectedMessage(null);
            }
            router.delete(route('admin.messages.destroy', msg.id));
        }
    };

    const openMessage = (msg: ContactMessage) => {
        setSelectedMessage(msg);
        if (!msg.is_read) {
            router.patch(route('admin.messages.toggle-read', msg.id));
        }
    };

    return (
        <AdminLayout
            title="Messages & Inquiries Inbox"
            subtitle="View, respond to, and manage client inquiries submitted through the contact form."
        >
            {/* Filter Tabs & Stats */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Link
                        href="/admin/messages"
                        className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                            filter === 'all'
                                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                                : 'bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300'
                        }`}
                    >
                        All Messages ({messages.total})
                    </Link>

                    <Link
                        href="/admin/messages?filter=unread"
                        className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all flex items-center gap-1.5 ${
                            filter === 'unread'
                                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                                : 'bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300'
                        }`}
                    >
                        <span>Unread</span>
                        {unreadCount > 0 && (
                            <span className="rounded-full bg-rose-500 px-1.5 py-0.2 text-[10px] text-white">
                                {unreadCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>

            {/* Messages List Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="border-b border-slate-200/80 bg-slate-50/75 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400">
                            <tr>
                                <th className="px-6 py-4">Sender</th>
                                <th className="px-6 py-4">Subject & Message Preview</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                            {messages.data.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-16 text-center text-slate-400">
                                        <Inbox className="mx-auto h-8 w-8 text-slate-300 dark:text-slate-600 mb-2" />
                                        <span>No messages found in this folder.</span>
                                    </td>
                                </tr>
                            ) : (
                                messages.data.map((msg) => (
                                    <tr
                                        key={msg.id}
                                        className={`transition-colors cursor-pointer hover:bg-slate-50/80 dark:hover:bg-slate-800/30 ${
                                            !msg.is_read
                                                ? 'bg-blue-50/30 font-semibold dark:bg-blue-950/20'
                                                : ''
                                        }`}
                                        onClick={() => openMessage(msg)}
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                                                        !msg.is_read
                                                            ? 'bg-blue-600 text-white'
                                                            : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                                                    }`}
                                                >
                                                    {msg.name.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <span className="font-bold text-slate-900 dark:text-white block">
                                                        {msg.name}
                                                    </span>
                                                    <span className="text-[11px] text-slate-400 font-mono">
                                                        {msg.email}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 max-w-md">
                                            <div className="truncate text-slate-900 dark:text-white">
                                                {msg.subject ? (
                                                    <span className="font-semibold text-slate-900 dark:text-slate-100 mr-1.5">
                                                        {msg.subject} —
                                                    </span>
                                                ) : null}
                                                <span className="text-slate-600 dark:text-slate-300">
                                                    {msg.message}
                                                </span>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-slate-500 font-mono text-[11px]">
                                            {new Date(msg.created_at).toLocaleDateString()}{' '}
                                            {new Date(msg.created_at).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </td>

                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                                                    msg.is_read
                                                        ? 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                                                        : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 animate-pulse'
                                                }`}
                                            >
                                                {msg.is_read ? 'Read' : 'New Unread'}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => toggleReadStatus(msg)}
                                                    className="p-1.5 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                    title={msg.is_read ? 'Mark Unread' : 'Mark Read'}
                                                >
                                                    {msg.is_read ? (
                                                        <Mail className="h-4 w-4" />
                                                    ) : (
                                                        <MailOpen className="h-4 w-4" />
                                                    )}
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(msg)}
                                                    className="p-1.5 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                                                    title="Delete Message"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Message Detail Modal Drawer */}
            {selectedMessage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
                    <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                        <div className="flex items-start justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                                    Inquiry Detail
                                </span>
                                <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                                    {selectedMessage.subject || 'Direct Contact Message'}
                                </h3>
                            </div>
                            <button
                                onClick={() => setSelectedMessage(null)}
                                className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-white"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="mt-6 space-y-6">
                            {/* Sender Info Card */}
                            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/50">
                                <div>
                                    <span className="block text-sm font-bold text-slate-900 dark:text-white">
                                        {selectedMessage.name}
                                    </span>
                                    <span className="text-xs text-slate-500 font-mono">
                                        {selectedMessage.email}
                                    </span>
                                </div>
                                <div className="text-right text-xs text-slate-400">
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3.5 w-3.5" />
                                        <span>
                                            {new Date(selectedMessage.created_at).toLocaleString()}
                                        </span>
                                    </div>
                                    {selectedMessage.ip_address && (
                                        <span className="font-mono text-[10px]">
                                            IP: {selectedMessage.ip_address}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Message Body */}
                            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/60">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                    Message Content
                                </h4>
                                <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                                    {selectedMessage.message}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                <button
                                    onClick={() => handleDelete(selectedMessage)}
                                    className="inline-flex items-center gap-2 text-xs font-semibold text-rose-600 hover:text-rose-700"
                                >
                                    <Trash2 className="h-4 w-4" />
                                    <span>Delete Message</span>
                                </button>

                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setSelectedMessage(null)}
                                        className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                                    >
                                        Close
                                    </button>
                                    <a
                                        href={`mailto:${selectedMessage.email}?subject=Re: ${encodeURIComponent(
                                            selectedMessage.subject || 'Your inquiry'
                                        )}`}
                                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-blue-500"
                                    >
                                        <Reply className="h-4 w-4" />
                                        <span>Reply via Email</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
