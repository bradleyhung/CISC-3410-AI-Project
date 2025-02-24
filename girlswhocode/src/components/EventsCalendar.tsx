"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const events = [
  { date: new Date(2023, 5, 15), title: "Intro to Python Workshop" },
  { date: new Date(2023, 5, 22), title: "Web Development Basics" },
  { date: new Date(2023, 6, 1), title: "Summer Hackathon Kickoff" },
  { date: new Date(2023, 6, 10), title: "AI and Machine Learning Talk" },
];

export default function EventsCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  const selectedEvents = events.filter(
    (event) => event.date.toDateString() === selectedDate?.toDateString()
  );

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-r from-emerald-100 via-green-100 to-lime-100 dark:from-emerald-950 dark:via-green-950 dark:to-lime-950"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Upcoming Events
        </h2>
        <div className="flex flex-col md:flex-row justify-evenly items-start">
          <div className="mb-8 md:mb-0 animate-bounce-slow">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border shadow bg-white dark:bg-gray-800"
            />
          </div>
          <div className="md:pl-8">
            <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              Events on {selectedDate?.toDateString()}
            </h3>
            {selectedEvents.length > 0 ? (
              <ul className="space-y-4">
                {selectedEvents.map((event, index) => (
                  <li
                    key={index}
                    className="bg-purple-50 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                      {event.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {event.date.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 dark:text-gray-300">
                No events scheduled for this date.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
