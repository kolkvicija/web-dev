import "./App.css";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
        rating: 2.5,
    });

    const [errors, setErrors] = React.useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRatingChange = (event, newValue) => {
        setFormData({ ...formData, rating: newValue });
    };

    const validate = () => {
        let isValid = true;
        let errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            console.log('Form submitted successfully:', formData);
            // Reset form data
            setFormData({
                name: '',
                email: '',
                message: '',
                rating: 2.5,
            });
            setErrors({
                name: '',
                email: '',
                message: '',
            });
        }
    };

    return (
        <div id="Contact-Us">
            <div>
                <h1 className="Headers">Contact us</h1>
            </div>

            <div id="Contact-Info">
                <div>
                    <h2>Our contact info</h2>
                    <p>
                        Katarina Šolaja<br />
                        +1 (555) 123-4567<br />
                        dummy@example.com<br />
                        123 Main Street, Cityville, State, Country, 12345
                    </p>
                </div>
                <div id="Form">
                    <h2>Leave a comment: </h2>
                    <form onSubmit={handleSubmit} noValidate>
                        <TextField
                            required
                            label="Name"
                            size="small"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                        /><br />
                        <TextField
                            required
                            label="E-mail"
                            size="small"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        /><br />
                        <p id="p1">Rate our service:  </p>
                        <Rating
                            name="rating"
                            value={formData.rating}
                            precision={0.5}
                            onChange={handleRatingChange}
                        /><br />
                        <TextField
                            label="Multiline Text Input"
                            name="message"
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                            value={formData.message}
                            onChange={handleChange}
                            error={!!errors.message}
                            helperText={errors.message}
                        /><br /><br />
                        <Button variant="contained" type="submit">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
