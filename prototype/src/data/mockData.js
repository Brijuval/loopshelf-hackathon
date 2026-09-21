export const items = [
  { 
    id: 1, 
    name: 'Arduino Uno Kit', 
    category: 'Electronics',
    distance: '280m', 
    location: 'Hostel 7, Room 214',
    time: 'Available today', 
    duration: '2 days',
    owner: 'Aditi', 
    ownerInitials: 'A',
    rating: '4.9', 
    price: 600,
    deposit: 50,
    emoji: '🔌',
    imageUrl: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=400',
    status: 'available',
    isVerified: true,
    contact: '+91 9876543210'
  },
  { 
    id: 2, 
    name: 'Camera Tripod', 
    category: 'Media',
    distance: '500m', 
    location: 'Central Library',
    time: 'Available for 6 hours', 
    duration: '1 day',
    owner: 'Rahul', 
    ownerInitials: 'R',
    rating: '4.7', 
    price: 800,
    deposit: 100,
    emoji: '📸',
    imageUrl: 'https://images.unsplash.com/photo-1510260408139-44031637841c?auto=format&fit=crop&q=80&w=400',
    status: 'available',
    isVerified: true,
    contact: '+91 9876543211'
  },
  { 
    id: 3, 
    name: 'Lab Coat (Size M)', 
    category: 'Lab Gear',
    distance: '1.2km', 
    location: 'Chemistry Block',
    time: 'Available all week', 
    duration: '5 days',
    owner: 'Priya', 
    ownerInitials: 'P',
    rating: '5.0', 
    price: 400,
    deposit: 50,
    emoji: '🥼',
    imageUrl: 'https://images.unsplash.com/photo-1582719202047-9ac6a1ab4270?auto=format&fit=crop&q=80&w=400',
    status: 'available',
    isVerified: true,
    contact: '+91 9876543212'
  },
  { 
    id: 4, 
    name: 'Scientific Calculator', 
    category: 'Study',
    distance: '100m', 
    location: 'Hostel 4, Block B',
    time: 'Available now', 
    duration: '3 days',
    owner: 'Karan', 
    ownerInitials: 'K',
    rating: '4.5', 
    price: 500,
    deposit: 50,
    emoji: '🧮',
    imageUrl: 'https://images.unsplash.com/photo-1574607407408-1e681c46041d?auto=format&fit=crop&q=80&w=400',
    status: 'available',
    isVerified: false,
    contact: '+91 9876543213'
  },
  { 
    id: 5, 
    name: 'HDMI Cable (2m)', 
    category: 'Electronics',
    distance: '800m', 
    location: 'Tech Hub',
    time: 'Available tomorrow', 
    duration: '1 day',
    owner: 'Sneha', 
    ownerInitials: 'S',
    rating: '4.8', 
    price: 150,
    deposit: 0,
    emoji: '📺',
    imageUrl: 'https://images.unsplash.com/photo-1544414603-9d9361a3575f?auto=format&fit=crop&q=80&w=400',
    status: 'available',
    isVerified: true,
    contact: '+91 9876543214'
  }
];

export const searchItems = (query, filterTag) => {
  let results = items;
  if (query) {
    const lowerQuery = query.toLowerCase();
    results = results.filter(item => 
      item.name.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery)
    );
  }
  if (filterTag && filterTag !== 'All') {
    const lowerTag = filterTag.toLowerCase();
    results = results.filter(item => 
      item.category.toLowerCase() === lowerTag ||
      item.name.toLowerCase().includes(lowerTag)
    );
  }
  return results;
};

export const requests = [
  {
    id: 101,
    name: 'Scientific Calculator',
    category: 'Study',
    urgency: 'Needed by tomorrow',
    requester: 'Rahul',
    requesterInitials: 'R',
    location: 'Central Library',
    bounty: 50,
    emoji: '🧮',
    status: 'open',
    contact: '+91 9876543211'
  },
  {
    id: 102,
    name: 'Arduino Sensors Kit',
    category: 'Electronics',
    urgency: 'Needed for hackathon',
    requester: 'Anjali',
    requesterInitials: 'A',
    location: 'Tech Hub',
    bounty: 0,
    emoji: '🔌',
    status: 'open',
    contact: '+91 9876543215'
  }
];

export const forecasts = [
  {
    id: 'f1',
    title: 'Scientific Calculators',
    reason: 'Midterms starting in 4 days',
    trend: '+300%',
    emoji: '🧮',
    category: 'Study',
    demandLevel: 'High',
    bountyEstimate: '₹10-30/day'
  },
  {
    id: 'f2',
    title: 'Arduino Kits',
    reason: 'Weekend Hackathon at Tech Hub',
    trend: '+150%',
    emoji: '🔌',
    category: 'Electronics',
    demandLevel: 'High',
    bountyEstimate: '₹20-50/day'
  },
  {
    id: 'f3',
    title: 'Lab Coats',
    reason: 'Chemistry 101 Labs starting',
    trend: '+80%',
    emoji: '🥼',
    category: 'Lab Gear',
    demandLevel: 'Medium',
    bountyEstimate: '₹10-20/day'
  }
];
