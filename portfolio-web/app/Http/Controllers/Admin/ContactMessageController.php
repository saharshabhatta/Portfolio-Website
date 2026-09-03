<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactMessageController extends Controller
{
    /**
     * Display the messages inbox.
     */
    public function index(Request $request): Response
    {
        $filter = $request->query('filter', 'all');

        $query = ContactMessage::latest();

        if ($filter === 'unread') {
            $query->unread();
        }

        $messages = $query->paginate(15)->withQueryString();

        return Inertia::render('Admin/Messages/Index', [
            'messages' => $messages,
            'filter' => $filter,
            'unreadCount' => ContactMessage::unread()->count(),
        ]);
    }

    /**
     * Mark a message as read/unread.
     */
    public function toggleRead(ContactMessage $message): RedirectResponse
    {
        $message->update([
            'is_read' => !$message->is_read,
            'read_at' => !$message->is_read ? now() : null,
        ]);

        return redirect()->back()->with('success', 'Message status updated.');
    }

    /**
     * Delete a contact message.
     */
    public function destroy(ContactMessage $message): RedirectResponse
    {
        $message->delete();

        return redirect()->back()->with('success', 'Message deleted successfully.');
    }
}
