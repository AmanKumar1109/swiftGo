export const NAV_LINKS = [
  { label: 'Food Delivery', href: '#services', hasDropdown: true },
  { label: 'Courier Services', href: '#milestones', hasDropdown: true },
  { label: 'About Us', href: '#about', hasDropdown: false },
  { label: 'Track Order', href: '#impact', hasDropdown: false },
]

export const HERO_COLLAGE_IMAGES = [
  {
    id: 'gourmet-meal',
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80&fm=webp',
    alt: 'Freshly prepared restaurant meal ready for delivery',
    positionClass: 'top-2 left-[18%] sm:left-[21%] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-28',
  },
  {
    id: 'courier-parcel',
    src: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=600&q=80&fm=webp',
    alt: 'Courier holding a neatly sealed delivery parcel',
    positionClass: 'top-12 right-[6%] sm:right-[10%] w-24 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28',
  },
  {
    id: 'food-packaging',
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80&fm=webp',
    alt: 'Artisan wood-fired pizza packed for fast delivery',
    positionClass: 'top-[28%] -left-4 sm:left-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32',
  },
  {
    id: 'delivery-bag',
    src: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=600&q=80&fm=webp',
    alt: 'SwiftGo delivery courier on route with insulated bag',
    positionClass: 'bottom-12 left-[10%] sm:left-[14%] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32',
  },
  {
    id: 'parcel-dispatch',
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80&fm=webp',
    alt: 'Organized courier parcels ready for same-day dispatch',
    positionClass: 'bottom-16 right-[22%] sm:right-[26%] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32',
  },
  {
    id: 'restaurant-bowl',
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80&fm=webp',
    alt: 'Healthy restaurant bowl prepared for doorstep delivery',
    positionClass: 'bottom-4 right-[4%] sm:right-[7%] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32',
  },
]

export const TIMELINE_MILESTONES = [
  {
    year: 'Food Delivery',
    watermark: '01',
    eyebrow: 'Service 01 · Restaurants',
    title: 'Your Favourite Food, Delivered Fresh.',
    description:
      'Discover great restaurants, explore delicious meals and get your favourite food delivered straight to your doorstep—hot, fresh, and right on schedule.',
    ctaLabel: 'Explore Restaurants',
  },
  {
    year: 'Courier',
    watermark: '02',
    eyebrow: 'Service 02 · Parcels',
    title: "Send Anything. We'll Get It There.",
    description:
      'From important documents to everyday parcels, send packages conveniently with reliable pickup and delivery backed by live tracking and trusted couriers.',
    ctaLabel: 'Book a Delivery',
  },
  {
    year: 'Express',
    watermark: '03',
    eyebrow: 'Platform Promise',
    title: 'Fast, Tracked & Dependable.',
    description:
      'Every order and parcel on SwiftGo is routed for speed and transparency, giving you real-time updates from pickup to doorstep drop-off.',
    ctaLabel: 'Track a Delivery',
  },
]

export const MISSION_CARDS = [
  {
    id: 'speed',
    icon: 'zap',
    title: 'Speed Without Compromise.',
    description:
      'Smart local routing ensures restaurant meals arrive fresh and urgent parcels reach their destination quickly without cutting corners.',
  },
  {
    id: 'reliability',
    icon: 'shield',
    title: 'Trusted Courier Network.',
    description:
      'Dedicated, vetted riders and drivers handle every meal and package with care, giving customers and businesses complete peace of mind.',
  },
  {
    id: 'convenience',
    icon: 'package',
    title: 'One Seamless Platform.',
    description:
      'SwiftGo brings food delivery and courier services together in one place—making everyday deliveries effortless from start to finish.',
  },
]

export const SOLUTION_CONTEXTS = [
  {
    id: 'food',
    label: 'Restaurant Food Delivery',
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85&fm=webp',
    thumb:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=75&fm=webp',
  },
  {
    id: 'courier',
    label: 'Courier & Parcel Delivery',
    image:
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1200&q=85&fm=webp',
    thumb:
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=200&q=75&fm=webp',
  },
  {
    id: 'express',
    label: 'Same-Day Express',
    image:
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=85&fm=webp',
    thumb:
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=200&q=75&fm=webp',
  },
  {
    id: 'takeaway',
    label: 'Fresh Meal Packaging',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=85&fm=webp',
    thumb:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=200&q=75&fm=webp',
  },
  {
    id: 'business',
    label: 'Business Dispatch',
    image:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85&fm=webp',
    thumb:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=200&q=75&fm=webp',
  },
]

export const FOOTER_COLUMNS = [
  {
    title: 'Services',
    links: [
      { label: 'Order Food', href: '#services' },
      { label: 'Send a Parcel', href: '#milestones' },
      { label: 'Express Courier', href: '#services' },
      { label: 'Business Delivery', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About SwiftGo', href: '#about' },
      { label: 'Partner Restaurants', href: '#services' },
      { label: 'Become a Courier', href: '#impact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Track Order', href: '#milestones' },
      { label: 'Help Center', href: '#contact' },
      { label: 'Delivery Coverage', href: '#impact' },
      { label: 'FAQs', href: '#contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Facebook', href: '#' },
    ],
  },
]
