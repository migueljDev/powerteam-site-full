
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{ maxWidth: '1000px', margin: 'auto', padding: '2rem' }}>
    <header style={{ textAlign: 'center', paddingBottom: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1e40af' }}>Power Team Services LLC</h1>
      <p style={{ fontSize: '1.2rem', color: '#333' }}>Reliable Electrical and Low-Voltage Installations</p>
    </header>

    <section>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Services</h2>
      <ul style={{ lineHeight: '1.8', color: '#444' }}>
        <li><strong>Electrical Installations:</strong> EMT conduit, primary/secondary pipe, outlets, switches, EV chargers.</li>
        <li><strong>Fire Alarm Systems:</strong> Cabling and device installation (no programming).</li>
        <li><strong>Communication & Security:</strong> Cameras, speakers, internet & phone cabling with mapping and rack setup.</li>
        <li><strong>BDA Systems:</strong> Complete Bi-Directional Amplifier installations.</li>
      </ul>
    </section>

    <section style={{ marginTop: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Project Gallery</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <img src="/images/sample1.jpg" alt="Project 1" style={{ width: '300px', borderRadius: '8px' }} />
        <img src="/images/sample2.jpg" alt="Project 2" style={{ width: '300px', borderRadius: '8px' }} />
        <img src="/images/sample3.jpg" alt="Project 3" style={{ width: '300px', borderRadius: '8px' }} />
      </div>
    </section>

    <section style={{ marginTop: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contact Us</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="4" placeholder="Your Message" required></textarea>
        <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#1e40af', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Send Message
        </button>
      </form>
    </section>

    <footer style={{ textAlign: 'center', marginTop: '3rem', color: '#777' }}>
      &copy; {new Date().getFullYear()} Power Team Services LLC. All rights reserved.
    </footer>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
