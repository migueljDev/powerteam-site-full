
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{ padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
    <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Power Team Services LLC</h1>
    <p style={{ marginTop: '0.5rem' }}>Reliable Electrical and Low-Voltage Installations</p>

    <h2 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>Our Services</h2>
    <ul>
      <li><strong>Electrical Installations:</strong> EMT conduit, primary/secondary pipe, outlets, switches, EV chargers.</li>
      <li><strong>Fire Alarm Systems:</strong> Cabling and device installation (no programming).</li>
      <li><strong>Communication & Security:</strong> Cameras, speakers, internet & phone systems with full mapping, cabling, and rack assembly.</li>
      <li><strong>BDA Systems:</strong> Bi-Directional Amplifier installation end to end.</li>
    </ul>

    <h2 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>Project Gallery</h2>
    <p>Coming soon: photos and details of completed projects.</p>

    <h2 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>Contact Us</h2>
    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea rows="4" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>

    <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'gray' }}>
      &copy; {new Date().getFullYear()} Power Team Services LLC. All rights reserved.
    </footer>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
