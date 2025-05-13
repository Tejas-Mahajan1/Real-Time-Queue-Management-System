# Hypermart Queue Management System

A real-time customer distribution system for managing checkout queues in a hypermart, built with Next.js and React.

## Overview

This system optimally assigns customers to checkout counters based on the total number of items in each queue. It ensures efficient distribution of customers while maintaining the best possible checkout experience.

## Features

- Real-time queue management and updates
- Optimal customer assignment based on queue loads
- Responsive design that works on all devices
- Dark/Light mode support
- Persistent theme preferences
- Visual representation of queue status

## Algorithm

### Time Complexity Analysis

1. **Customer Assignment (findOptimalCounter)**
   - Time Complexity: O(n), where n is the number of checkout counters
   - Space Complexity: O(1)
   
   ```javascript
   const findOptimalCounter = () => {
     let minItems = Infinity;
     let counterIndex = 0;

     counters.forEach((counter, index) => {
       if (counter.totalItems < minItems) {
         minItems = counter.totalItems;
         counterIndex = index;
       }
     });

     return counterIndex;
   };
   ```

2. **Queue Update Operation**
   - Time Complexity: O(1) for adding a customer
   - Space Complexity: O(1) for storing customer data

### Algorithm Design Decisions

1. **Counter Selection Logic**
   - Always selects the counter with the minimum total items
   - In case of ties, selects the leftmost counter (smaller index)
   - Maintains running totals to avoid recalculation

2. **Data Structure Choice**
   - Uses an array of counter objects for direct indexing
   - Each counter maintains its customer list and total items
   - Optimized for quick updates and reads

## Technical Implementation

### State Management
```javascript
const [counters, setCounters] = useState([
  { customers: [], totalItems: 0 },
  { customers: [], totalItems: 0 },
  { customers: [], totalItems: 0 },
]);
```

### Key Components

1. **Counter Component**
   - Displays individual counter information
   - Shows customer count and total items
   - Updates in real-time

2. **Theme Toggle**
   - Manages light/dark mode preferences
   - Persists user preferences
   - Smooth theme transitions

## Performance Optimizations

1. **Efficient Updates**
   - Uses immutable state updates
   - Minimizes re-renders
   - Maintains O(1) queue updates

2. **Memory Management**
   - Stores only essential customer data
   - Uses efficient data structures
   - Avoids redundant calculations

## Assumptions and Design Decisions

1. **Queue Management**
   - Customers never leave the queue (FIFO principle)
   - Item counts are positive integers
   - No maximum limit on items per customer
   - No maximum queue length

2. **User Interface**
   - Real-time updates are essential
   - Visual feedback for all actions
   - Accessible color schemes
   - Responsive design for all screen sizes

3. **System Constraints**
   - Single point of entry for new customers
   - Fixed number of checkout counters
   - No priority queuing
   - No customer rearrangement after assignment

## Edge Cases Handled

1. **Input Validation**
   - Prevents negative item counts
   - Validates numeric input
   - Handles empty input cases

2. **Queue States**
   - Handles empty queues
   - Manages equal queue loads
   - Processes multiple simultaneous updates

## Setup and Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
cd queue-management-system
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Testing

Run the test suite:
```bash
npm test
```

The test suite covers:
- Customer assignment logic
- Edge cases
- Queue management
- State updates
- UI interactions

## Future Improvements

1. **Features**
   - Queue time estimation
   - Customer priority system
   - Dynamic counter addition/removal
   - Historical data analytics

2. **Performance**
   - Queue optimization algorithms
   - Load balancing improvements
   - Caching strategies

3. **UI/UX**
   - Animation for queue updates
   - Sound notifications
   - Accessibility improvements
   - Mobile-specific optimizations

## Technical Stack

- **Frontend**: Next.js, React
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Build Tool**: Vite
- **Testing**: Jest, React Testing Library

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
