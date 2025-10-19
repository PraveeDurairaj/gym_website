import { Dialog, MenuItem, TextField } from '@mui/material'
import { CloseIcon } from '../assets/SvgComponents';
import { brandLogo } from '../helper/getStaticImages';
import Button from '../ui/Button';

const ContactModal = ({ show, handleClose }) => {
    const planData = [
        {
            value: 'Free plan',
            label: 'Starter Plan - Free',
        },
        {
            value: 'Standard Plan',
            label: 'Standard Plan - $29',
        },
        {
            value: 'Premium Plan',
            label: 'Premium Plan - $49',
        }
    ];

    const ServiceData = [
        {
            value: 'Personal Training',
            label: 'Personal Training',
        },
        {
            value: 'Nutrition Coaching',
            label: 'Nutrition Coaching',
        },
        {
            value: 'Corporate Wellness',
            label: 'Corporate Wellness',
        },
        {
            value: 'Yoga',
            label: 'Yoga',
        },
        {
            value: 'Zumba',
            label: 'Zumba',
        },
        {
            value: 'Others',
            label: 'Others',
        },

    ];


    return (
        <Dialog onClose={() => handleClose(!show)} open={show} maxWidth={'md'} fullWidth={true}>
            <div className='contact_modal_grid'>
                <div className="contact_modal_image" />
                <div className='contact_form_wrapper'>
                    <div className="modal_close_container" tabIndex={0} onClick={() => handleClose(!show)}>
                        <CloseIcon />
                    </div>
                    <img src={brandLogo} className='contact_brand_logo' />
                    <TextField label="Name" variant="outlined" size="small" />
                    <TextField label="Age" variant="outlined" size="small" />
                    <TextField label="Phone No" variant="outlined" size="small" />
                    <TextField select label="Please select Plan" size="small">
                        {planData?.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField select label="Please select service" size="small">
                        {ServiceData?.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button buttonText={'Get start'} />
                </div>
            </div>
        </Dialog>
    )
}

export default ContactModal