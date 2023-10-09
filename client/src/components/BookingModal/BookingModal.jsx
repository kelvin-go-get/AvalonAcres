import React, { useState } from "react";
import { Modal, Button } from "@mantine/core";
import { DatePicker } from '@mantine/dates';

const BookingModal = ({ opened, setOpened, email, propertyId }) => {

    const [value, setValue] = useState(null)
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Select your date of visit"
      centered
    >
      <div className="flexColCenter">
        <DatePicker value={value} onChange={setValue} minDate={new Date()}/> 
        <Button>
            Book Visit
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
