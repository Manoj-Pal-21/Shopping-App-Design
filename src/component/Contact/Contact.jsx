import React from 'react';

const Contact = () => {
  return (
    <div className="p-8 max-w-[42rem]">
      {/* Title */}
      <h1 className="text-4xl leading-[45px] font-bold mb-6">Leave a Reply</h1>

      {/* Labels in two rows */}
      <div className="flex flex-col gap-6 mb-6">
        <p className="text-[14.53px] leading-[28.13px]">
          Your email address will not be published. Required fields are marked *
        </p>

        {/* First Row */}
        <div className="flex gap-6">
          <div className="flex-1">
            <span className="block text-[14.77px] leading-[28.13px] font-medium">Location</span>
          </div>
          <div className="flex-1">
            <span className="block text-[14.77px] leading-[28.13px] font-medium">Amenities</span>
          </div>
          <div className="flex-1">
            <span className="block text-[14.77px] leading-[28.13px] font-medium">Food</span>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-6">
          <div className="flex-1">
            <span className="block text-[14.77px] leading-[28.13px] font-medium">Room</span>
          </div>
          <div className="flex-1">
            <span className="block text-[14.77px] leading-[28.13px] font-medium">Price</span>
          </div>
          <div className="flex-1">
            <span className="block text-[14.77px] leading-[28.13px] font-medium">Tour Operator</span>
          </div>
        </div>
      </div>

      <form className="space-y-6">
        {/* Name and Email */}
        <div className="flex gap-6">
          {/* Name */}
          <div className="flex-1">
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-lg p-3 w-full"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="flex-1">
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-lg p-3 w-full"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        {/* Comment */}
        <div className="flex flex-col">
          <label htmlFor="comment" className="text-lg font-medium mb-2">Comment</label>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            className="border border-gray-300 rounded-lg p-3 w-full"
            placeholder="Enter your comment"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default Contact;
