function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '40px', background: 'linear-gradient(to right, #6a11cb, #2575fc)', color: 'white' }}>
      <div style={{ width: '60%' }}>
        <h2>GET IN TOUCH</h2>
        <p>
          Please fill out the form below to send us an email and we will get back to you as soon as possible.
        </p>
        <form>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <input type="text" placeholder="Name" style={{ flex: 1, padding: '10px', border: 'none', borderRadius: '5px' }} />
            <input type="email" placeholder="Email" style={{ flex: 1, padding: '10px', border: 'none', borderRadius: '5px' }} />
          </div>
          <textarea placeholder="Message" style={{ width: '100%', height: '100px', padding: '10px', border: 'none', borderRadius: '5px', marginBottom: '15px' }}></textarea>
          <button type="submit" style={{ padding: '10px 20px', background: 'white', color: '#6a11cb', border: '1px solid white', borderRadius: '5px', cursor: 'pointer' }}>SEND MESSAGE</button>
        </form>
      </div>
      <div style={{ width: '35%' }}>
        <h3>Contact Info</h3>
        <p><strong>Address:</strong> 4821 California St, San Francisco, CA 12345</p>
        <p><strong>Phone:</strong> +1 123 456 1234</p>
        <p><strong>Email:</strong> info@company.com</p>
      </div>
    </div>
  );
}
export default Home;