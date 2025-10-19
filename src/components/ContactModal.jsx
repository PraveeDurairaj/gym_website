import { useState } from 'react';
import { Dialog, MenuItem, TextField } from '@mui/material'
import { useForm, Controller } from 'react-hook-form';
import { CloseIcon } from '../assets/SvgComponents';
import { brandLogo } from '../helper/getStaticImages';
import { staticContent } from '../helper/getStaticData';
import Button from '../ui/Button';

const ContactModal = ({ show, handleClose }) => {
    const { register, handleSubmit, control, formState: { errors }, } = useForm({
        defaultValues: {
            name: '',
            age: '',
            phone: '',
            plan: '',
            service: ''
        }
    });
    const [isThanks, setIsThanks] = useState(false)
    const googleUrl = 'https://script.google.com/macros/s/AKfycbwP1SltAynoJY4-J940awms67H4mAFikM2wZS0T8JOn-4tImseiA4xeDiktA-eYl5uNgA/exec'
    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('name', data?.name);
        formData.append('age', data?.age ?? '-');
        formData.append('phone', data?.phone);
        formData.append('plan', data?.plan ?? '-');
        formData.append('service', data?.service ?? '-');
        try {
            const response = await fetch(googleUrl, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setIsThanks(true)
            } else {
                console.log('Failed to submit form.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const { selectPlanData, selectServiceData } = staticContent


    return (
        <Dialog open={show} maxWidth={'md'} fullWidth={true}>
            <div className='contact_modal_grid'>
                <div className="contact_modal_image" />
                <form className='contact_form_wrapper' onSubmit={handleSubmit(onSubmit)}>
                    <div className="modal_close_container" tabIndex={0} onClick={() => handleClose(!show)}>
                        <CloseIcon />
                    </div>
                    {isThanks ?
                        <div className="thanks_page_container">
                            <h2>🎉 Thank You!</h2>
                            <p>Your form was submitted successfully.</p>
                        </div> :
                        <>
                            <img src={brandLogo} className='contact_brand_logo' />
                            <TextField
                                label="Name"
                                variant="outlined"
                                size="small"
                                {...register('name', {
                                    required: 'Name is required',
                                    validate: (value) => value.trim() !== '' || 'Name cannot be empty or whitespace',
                                })}

                                error={errors?.name}
                                helperText={errors.name?.message}

                            />
                            <TextField
                                label="Age"
                                variant="outlined"
                                size="small"
                                {...register('age', {
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: 'Only numbers are allowed',
                                    },
                                    min: {
                                        value: 0,
                                        message: 'Age cannot be negative',
                                    },
                                    max: {
                                        value: 100,
                                        message: 'Age must be less than or equal to 100',
                                    },
                                })}
                                error={errors?.age}
                                helperText={errors.age?.message}

                            />
                            <TextField
                                label="Phone No"
                                variant="outlined"
                                size="small"
                                {...register('phone', {
                                    required: 'Phone No is required',
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: 'Only numbers are allowed',
                                    },
                                })}
                                error={errors?.phone}
                                helperText={errors.phone?.message}
                            />
                            <Controller name="plan" control={control}
                                render={({ field }) => (
                                    <TextField select label="Please Select Plan" size="small" {...field}>
                                        {selectPlanData?.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>))}
                                    </TextField>)}
                            />
                            <Controller name="service" control={control}
                                render={({ field }) => (
                                    <TextField select label="Please Select Service" size="small" {...field}>
                                        {selectServiceData?.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>))}
                                    </TextField>)}
                            />
                            <Button buttonType="submit" buttonText={'Get start'} />
                        </>}
                </form>
            </div>
        </Dialog>
    )
}

export default ContactModal