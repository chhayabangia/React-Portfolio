import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleBlur = (field) => {
    if (!form[field]) {
      setErrors(prev => ({ ...prev, [field]: 'This field is required' }));
    } else {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (name === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
      setErrors(prev => ({ ...prev, email: 'Invalid email' }));
    }
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <input name="name" placeholder="Name" onBlur={() => handleBlur('name')} onChange={handleChange} />
        {errors.name && <p className="error">{errors.name}</p>}
        
        <input name="email" placeholder="Email" onBlur={() => handleBlur('email')} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}

        <textarea name="message" placeholder="Message" onBlur={() => handleBlur('message')} onChange={handleChange} />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Send</button>
      </form>
    </section>
  );
}