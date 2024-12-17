import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiKofi } from 'react-icons/si';
import styles from './Footer.module.css';

const Footer = () => {
  const coffeeTypes = [
    { id: 'espresso', name: 'Espresso', basePrice: 3 },
    { id: 'latte', name: 'Latte', basePrice: 4 },
    { id: 'cappuccino', name: 'Cappuccino', basePrice: 5 },
  ];

  const multipliers = [1, 2, 3, 5];
  const [selectedCoffee, setSelectedCoffee] = React.useState(coffeeTypes[0]);
  const [multiplier, setMultiplier] = React.useState(1);
  const [customMultiplier, setCustomMultiplier] = React.useState('');
  const [donorName, setDonorName] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleBuyClick = () => {
    const finalMultiplier = customMultiplier || multiplier;
    const totalAmount = selectedCoffee.basePrice * finalMultiplier;
    const kofiUrl = new URL(`https://ko-fi.com/yourusername`);
    kofiUrl.searchParams.append('amount', totalAmount);
    kofiUrl.searchParams.append('message', `${donorName}: ${message}`);
    window.open(kofiUrl.toString(), '_blank');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Left side - Social Media */}
        <div className={styles.socialSection}>
          <h3>Connect With Me</h3>
          <div className={styles.socialIcons}>
            <a href="https://github.com/ADITYA150090" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/aditya-dhawle-3932a124b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/aditya_1000_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Donation section */}
        <div className={styles.donationSection}>
          <h3>Buy Me a Coffee</h3>
          
          <div className={styles.coffeeSelection}>
            {coffeeTypes.map((coffee) => (
              <button
                key={coffee.id}
                className={`${styles.coffeeTypeBtn} ${selectedCoffee.id === coffee.id ? styles.selected : ''}`}
                onClick={() => setSelectedCoffee(coffee)}
              >
                {coffee.name} (${coffee.basePrice})
              </button>
            ))}
          </div>

          <div className={styles.multiplierSection}>
            {multipliers.map((num) => (
              <button
                key={num}
                className={`${styles.multiplierBtn} ${multiplier === num && !customMultiplier ? styles.selected : ''}`}
                onClick={() => {
                  setMultiplier(num);
                  setCustomMultiplier('');
                }}
              >
                {num}x
              </button>
            ))}
            <input
              type="number"
              placeholder="Custom amount"
              value={customMultiplier}
              onChange={(e) => {
                setCustomMultiplier(e.target.value);
                setMultiplier(1);
              }}
              className={styles.customMultiplier}
              min="1"
            />
          </div>

          <div className={styles.donorInfo}>
            <input
              type="text"
              placeholder="Your Name (optional)"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              className={styles.donorInput}
            />
            <textarea
              placeholder="Leave a message (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.messageInput}
            />
          </div>

          <button 
            className={styles.buyButton}
            onClick={handleBuyClick}
          >
            <SiKofi />
            Buy me {customMultiplier || multiplier}x {selectedCoffee.name}
            <span className={styles.amount}>
              ${(selectedCoffee.basePrice * (customMultiplier || multiplier)).toFixed(2)}
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
