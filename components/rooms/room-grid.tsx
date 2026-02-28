'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import RoomDetailModal from './room-detail-modal';

const rooms = [
  {
    title: 'Presidential Ocean Suite',
    price: '$1,200',
    originalPrice: '$1,500',
    details: '1 King Bed • 1500 Sq Ft • Floor 24-30',
    description: 'Our finest suite offering panoramic ocean views, a private terrace, separate living area, and a marble bathroom with a soaking tub.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjVW-9ahbEJIkZRjIvhQxVTyIgI84iGHvmt4LVO8VSKqfWTI0GQ6k0vwkSnQ5-7QMXkyfDIhh5FvQCIRtIlBlagC6EAj_SkSuCNJ8mQ9-62CVnRtavgqMVTCCdEquawDr5xXvnfvkkQOENQYdK-TErLi85DaS9eCz-M0piwG2JT6Fy7vIjsav7TP8rOMfDqiCMxpGkiimdPmZrSfSR9Y2eZZ6b8-firSazNlBYu_f5ZBBmXzek2-FEChT7frHTk4pHwe0c2YjFCGe0',
    tag: 'Ocean View',
    amenities: ['wifi', 'bathtub', 'bed', 'ac_unit']
  },
  {
    title: 'Executive Garden Villa',
    price: '$850',
    details: '2 Queen Beds • 950 Sq Ft • Ground Floor',
    description: 'Direct access to our lush botanical gardens. Features a private patio, spacious work desk, and rainfall shower.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsm7H2-DH9m5jwIkho4sD3GWgDGsFCIAHnJYGQIvJzJ07siKwnwybOOWJ0i5yUMk95_3OUnw0_HFVUlonAFE3ulBZpWCZOSc-NyIBqs3yRm684HovdDG1X_13jtvNwFr1EpS1Brz3CW9C0NtxH4sD8b5wPCZZsekZshrgYH-OMO48mE548cS9vpsfGHqfhPbSPO5TnH4_Hms99-v2rfpST0ZdwZnnmMmA4gtKH9vFAbQq36pf1wLxb-e6_41Zpghlah3k27rlJkoDo',
    tag: 'Garden Access',
    amenities: ['wifi', 'spa', 'coffee_maker']
  },
  {
    title: 'Deluxe King Room',
    price: '$450',
    originalPrice: '$600',
    details: '1 King Bed • 550 Sq Ft • Floors 10-20',
    description: 'The perfect balance of comfort and style. Enjoy city skyline views, a plush king-sized bed, and modern entertainment systems.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8uwayg7idNJmKQzQls3rLQxUIyVJ96Ky-2-TB36WQTUVq-tLPh6k2glPf3L-n1qv1h1JfBPbaArPaaBwM1voEOGgCMC6xFooYG3rIY1fuXGJyiqWeH_1ftiR8l1Rg2tOuTPY2o6N9KUqvhNd3623Ct7llViqUuzhnGv9VtUkujqox_ZNCKmb7Z3KxRuNfkogpWsBO1BMDI5LM5_IJNmeKwNCN8Dx5iWIw3eOsXjV-vZp_Kro_mo95Vgo3QH02MadXUjUl5hj4Rl0N',
    tag: 'Best Seller',
    amenities: ['wifi', 'tv', 'local_bar']
  },
  {
    title: 'Royal Penthouse',
    price: '$5,000',
    details: '3 King Beds • 3200 Sq Ft • Top Floor',
    description: 'The pinnacle of luxury living. Features a private infinity pool, dedicated butler service, and 360-degree city views.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuDngPOEPbpnS1ult7ONuvHf3Iz72tKF_VsrDL06p8lxnlschG8LP3GPBTw0ovQs73KtUoJYIS9oLsXnXma0DioBisKj9-1GWSW9AaVZnS_6RbnsDrF32-Eu_ko6FybXBZ42-bKAdZUJBc0_k7oMNMfHVL2SfdCIMYcKirEpvmazigP-8hpq4vAocQ8xMfr7CtXU1MuXdW0W6Wd0NosEWP4XYbu7wZIyHD60H-NZTRQny1tqa0JT59C5QYzWx8Kl_TzPvUfUf9IsaF',
    tag: 'Panoramic',
    amenities: ['pool', 'concierge', 'kitchen']
  },
  {
    title: 'Two Bedroom Family Suite',
    price: '$950',
    originalPrice: '$1,100',
    details: '1 King, 2 Twins • 1100 Sq Ft • Floor 5-15',
    description: 'Spacious accommodation for the whole family. Includes a separate play area, two full bathrooms, and child-safe amenities.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPWEEM_-Fid5Vt-B2sSEvIruc3Fy9xONq5nM7LQqoS09qVTY0iD0actPGHu04Q3GcAYtxxjPNTd9oc9Nv4GnQc0yHdjnNQPCeH9xcmq_4snxBNruRJnE0mJAbwcGyCBUfrZK40WobX7Ip1XlO-__X-8y3OaRfvTKKYzcVR8RtfLVr5EVXJMSmpxQS-QxvJudSIXdujGH3L_etrfP-zU5W39pVSxZLkCEdVyz3qtYT-v1d2TiJYQxTjn_vGG80d2qDVmVcOBcO5HMpt',
    tag: 'Family Friendly',
    amenities: ['crib', 'videogame_asset', 'kitchen']
  },
  {
    title: 'Signature Honeymoon Suite',
    price: '$780',
    details: '1 King Bed • 800 Sq Ft • Sunset View',
    description: 'Designed for romance with an open-concept bath, fireplace, and a balcony perfectly positioned for sunset views.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9xVDnxlvgEyd9pvMPOO4ylhWm-cbxC3YBuTE7gudqQXywAVeEbAVCl2L6H0snFM1MYXNv2ssJ6uwGz78rMXHqCLQ6uwKvSUwK5sNWzLD8zxWKGKLtc8cGeddtJKAFage9R64N_nUQz7uToVKtWapY-Ibocy1KXSKJWWvYrsw3G6jznBnSPRQLhvwDWdjKJ3kB97hQbNoGeCsMpPoR1U-JVN8n0MF3Id8IxwUDshh3UbW2s8o0XYAKsI5wFOgS20hq1tTM-k2HL6SZ',
    tag: 'Romantic',
    amenities: ['fireplace', 'wine_bar', 'local_florist']
  }
];

export default function RoomGrid() {
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (room: any) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <motion.div 
            key={room.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col bg-surface-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5"
          >
            <div className="relative h-[250px] w-full overflow-hidden">
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <span className={`text-background-dark text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm ${room.tag === 'Best Seller' || room.tag === 'Romantic' ? 'bg-white' : 'bg-primary/90'}`}>
                  {room.tag}
                </span>
              </div>
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 cursor-pointer" 
                style={{ backgroundImage: `url('${room.image}')` }}
                onClick={() => openModal(room)}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 pointer-events-none"></div>
              <button className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md hover:bg-white/20 p-2 rounded-full text-white transition-colors">
                <span className="material-symbols-outlined">favorite_border</span>
              </button>
            </div>
            
            <div className="flex flex-col flex-grow p-6 gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 
                    className="text-white text-2xl font-display font-bold mb-1 group-hover:text-primary transition-colors cursor-pointer"
                    onClick={() => openModal(room)}
                  >
                    {room.title}
                  </h3>
                  <p className="text-white/50 text-sm">{room.details}</p>
                </div>
              </div>
              <p className="text-white/70 text-sm line-clamp-2">{room.description}</p>
              
              {/* Amenities Preview */}
              <div className="flex gap-4 text-white/60 py-2 border-t border-white/5 mt-auto">
                {room.amenities.map(icon => (
                  <div key={icon} className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">{icon}</span>
                  </div>
                ))}
                <span 
                  className="text-xs self-center ml-auto text-primary cursor-pointer hover:underline"
                  onClick={() => openModal(room)}
                >
                  More +
                </span>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="flex flex-col">
                  {room.originalPrice ? (
                    <span className="text-white/40 text-xs line-through">{room.originalPrice}</span>
                  ) : (
                     <span className="text-white/40 text-xs">&nbsp;</span>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-primary text-xl font-bold">{room.price}</span>
                    <span className="text-white/40 text-xs">/ night</span>
                  </div>
                </div>
                <button 
                  onClick={() => openModal(room)}
                  className="bg-primary hover:bg-white text-background-dark font-bold py-2 px-5 rounded text-sm transition-colors uppercase tracking-wide"
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <RoomDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        room={selectedRoom} 
      />
    </>
  );
}
