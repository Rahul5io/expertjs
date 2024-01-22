
import { React, useState } from 'react'

export default function Input({ id, placeholder, ...props }) {
    // Add additional styling or functionality here
    return (
      <input
        id={id}
        placeholder={placeholder}
        // Spread any other props
        {...props}
        // Add any default styles or classes
        className="border-gray-300 rounded-lg p-2"
      />
    );
  }
  
  