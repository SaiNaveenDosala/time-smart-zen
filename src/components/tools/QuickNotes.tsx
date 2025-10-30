import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { StickyNote, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

const QuickNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [selectedNote, setSelectedNote] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('quicknotes');
    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quicknotes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!newTitle.trim() || !newContent.trim()) {
      toast.error("Please enter both title and content");
      return;
    }

    const note: Note = {
      id: Date.now().toString(),
      title: newTitle,
      content: newContent,
      createdAt: new Date().toLocaleDateString()
    };

    setNotes([note, ...notes]);
    setNewTitle("");
    setNewContent("");
    toast.success("Note saved!");
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
    if (selectedNote === id) setSelectedNote(null);
    toast.success("Note deleted");
  };

  const updateNote = (id: string, content: string) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, content } : note
    ));
  };

  return (
    <Card className="bg-gradient-card shadow-card border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <StickyNote className="h-5 w-5 text-primary" />
          Quick Notes
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input
            placeholder="Note title..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <Textarea
            placeholder="Write your note here..."
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            rows={3}
          />
          <Button onClick={addNote} className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Save Note
          </Button>
        </div>

        <div className="border-t border-border pt-4">
          <h4 className="font-semibold mb-3">Saved Notes ({notes.length})</h4>
          <div className="space-y-2 max-h-[400px] overflow-y-auto">
            {notes.length === 0 ? (
              <p className="text-center text-muted-foreground py-4">
                No notes yet. Create your first note above!
              </p>
            ) : (
              notes.map((note) => (
                <div
                  key={note.id}
                  className="p-3 bg-accent/10 border border-accent/20 rounded-lg space-y-2"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h5 className="font-semibold">{note.title}</h5>
                      <p className="text-xs text-muted-foreground">{note.createdAt}</p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-6 w-6"
                      onClick={() => deleteNote(note.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                  {selectedNote === note.id ? (
                    <Textarea
                      value={note.content}
                      onChange={(e) => updateNote(note.id, e.target.value)}
                      onBlur={() => setSelectedNote(null)}
                      autoFocus
                      rows={4}
                    />
                  ) : (
                    <p
                      className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                      onClick={() => setSelectedNote(note.id)}
                    >
                      {note.content}
                    </p>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickNotes;
