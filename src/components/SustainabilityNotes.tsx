import React from 'react';

interface SustainabilityNotesProps {
  notes: string[];
  checkIcon: React.ReactNode;
}

const SustainabilityNotes: React.FC<SustainabilityNotesProps> = ({ notes, checkIcon }) => (
  <div className="mt-8 space-y-2">
    {notes.map((note) => (
      <p key={note} className="text-[11px] flex items-center gap-2 text-grey-medium font-medium">
        <span className="text-earthy-green">{checkIcon}</span>
        {note}
      </p>
    ))}
  </div>
);

export default SustainabilityNotes;
