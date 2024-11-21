import { FC, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full px-6 py-4 flex justify-between items-center bg-gradient-to-r from-red-600 to-red-700 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

const LibraryRules: FC = () => {
  return (
    <div className="space-y-6">
      <Accordion title="General Rules and Reminders">
        <ul className="space-y-3">
          {[
            "Sign in the logbook before entering the library.",
            "Bags, folders, portfolio should be deposited at the baggage counter.",
            "Wearing of school ID inside the library is necessary.",
            "DO NOT bring books without proper consent from library in-charge.",
            "First come, first serve basis in book borrowing. No reservations.",
            "General reference books are for inside reading only.",
            "Photocopy is allowed for 30 minutes only.",
            "Eating inside the library is strictly prohibited.",
            "OBSERVE SILENCE at all times.",
            "No writing on books or furniture. Vandalism is subject to action.",
            "Library violators will lose privileges.",
            "RESPECT the library staff at all times."
          ].map((rule, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                {index + 1}
              </span>
              <span className="text-gray-700">{rule}</span>
            </li>
          ))}
        </ul>
      </Accordion>

      <Accordion title="Circulation Section">
        <div className="space-y-4">
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold">Book Limits:</span> CIT students can avail three (3) books and are allowed to borrow two (2) books at a time.
            </p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold">Loan Period:</span> General reading books can be borrowed for three days.
            </p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold">Return Policy:</span> Books shall be returned anytime of the day on their due date.
            </p>
          </div>
        </div>
      </Accordion>

      <Accordion title="Reserve Section">
        <div className="space-y-4">
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Access Rules</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Resources must be accessed through library staff on duty</li>
              <li>• Required readings are restricted to room use during the day</li>
              <li>• Overnight lending available 2 hours before closing</li>
              <li>• Books in demand limited to 1-hour use (renewable if no requests)</li>
              <li>• Overnight loans due between 8-9 AM the next day</li>
            </ul>
          </div>
        </div>
      </Accordion>

      <Accordion title="Faculty and Staff Guidelines">
        <div className="grid gap-4">
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Regular Faculty</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Maximum 5 books per term class</li>
              <li>• Must return at end of block classes</li>
              <li>• Subject to recall for high-demand items</li>
            </ul>
          </div>
          
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Regular Staff</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Maximum 3 books per semester</li>
              <li>• Return required at semester end</li>
              <li>• Must follow sanitization protocols</li>
            </ul>
          </div>

          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Part-Time Faculty</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Requires approved referral from president/deans</li>
              <li>• Must complete duplicate referral forms</li>
              <li>• Subject to same sanitization rules</li>
            </ul>
          </div>
        </div>
      </Accordion>

      <Accordion title="Borrower's Card Rules">
        <div className="p-4 bg-red-50 rounded-lg">
          <ul className="space-y-2 text-gray-700">
            <li>• Required for all library transactions</li>
            <li>• Must present study load at library</li>
            <li>• Non-transferable</li>
            <li>• Lost cards replaceable after 1 week</li>
            <li>• Required for clearance signing</li>
          </ul>
        </div>
      </Accordion>

      <Accordion title="Fines and Penalties">
        <div className="space-y-4">
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Late Returns</h4>
            <p className="text-gray-700">₱10.00 for the first hour after cut-off time, ₱2.00 for succeeding hours</p>
          </div>
          
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Lost or Damaged Materials</h4>
            <p className="text-gray-700">Must be replaced with same title/author/edition or pay latest price plus 10%</p>
          </div>
        </div>
      </Accordion>

      <Accordion title="Code of Discipline">
        <div className="grid gap-4">
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Prohibited Actions</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• No smoking or littering</li>
              <li>• No eating or drinking</li>
              <li>• No seat reservation</li>
              <li>• No writing on or mutilation of materials</li>
              <li>• No unauthorized removal of materials</li>
            </ul>
          </div>
          
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Silence Policy</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Maintain quiet atmosphere</li>
              <li>• Phones on silent mode</li>
              <li>• Conduct conversations outside</li>
              <li>• Staff authorized to remove disruptive users</li>
            </ul>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default LibraryRules;