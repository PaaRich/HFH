import { useContext, useState } from "react";
import { Context } from "../Context/Context";

// eslint-disable-next-line react/prop-types
const EventForm = ({ onSubmit }) => {
  const { setAddEvent, myEventList, setMyEventList } = useContext(Context);
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!myEventList.title || !myEventList.startDate || !myEventList.endDate) {
      alert("Please fill in all required fields.");
      return;
    }

    const start = myEventList.allDay
      ? new Date(myEventList.startDate)
      : new Date(`${myEventList.startDate}T${myEventList.startTime}`);
    const end = myEventList.allDay
      ? new Date(myEventList.endDate)
      : new Date(`${myEventList.endDate}T${myEventList.endTime}`);

    if (end < start) {
      alert("End date/time must be after the start date/time.");
      return;
    }

    onSubmit({
      title: myEventList.title,
      start,
      end,
      allDay: myEventList.allDay,
    });

    setMyEventList({
      title: "",
      start: "",
      end: "",
      allDay: false,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-[1px] bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
        Add Event
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={myEventList.title}
          onChange={handleChange}
          placeholder="Event Title"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Start Date
        </label>
        <input
          type="date"
          name="startDate"
          value={myEventList.startDate}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {!myEventList.allDay && (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Start Time
          </label>
          <input
            type="time"
            name="startTime"
            value={myEventList.startTime}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      )}

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          End Date
        </label>
        <input
          type="date"
          name="endDate"
          value={myEventList.endDate}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {!myEventList.allDay && (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            End Time
          </label>
          <input
            type="time"
            name="endTime"
            value={myEventList.endTime}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      )}

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          name="allDay"
          checked={myEventList.allDay}
          onChange={handleChange}
          className="mr-2 leading-tight"
        />
        <label className="text-gray-700 text-sm font-bold">All Day</label>
      </div>

      <div className="flex items-center gap-x-2">
        <button
          type="submit"
          className="w-1/2 bg-blue-500 text-white py-2 px-4 rounded-mg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add Event
        </button>
        <button
          className="w-1/2 bg-red-500 text-white py-2 px-4 rounded-mg font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setAddEvent(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EventForm;
