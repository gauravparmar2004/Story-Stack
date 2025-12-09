import Contact from '../models/Contact.model.js';

// Get all contact entries
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a contact entry
export const createContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;

    if (!fullName || !email || !mobile || !city) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const contact = new Contact({
      fullName,
      email,
      mobile,
      city,
    });

    await contact.save();
    res.status(201).json({ message: 'Contact submitted successfully', contact });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
