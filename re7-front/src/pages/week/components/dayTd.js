import React, { useState } from 'react';
import { usePopper } from 'react-popper';

const DayTdComponent = ({ day }) => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const [showPoppers, setShowPoppers] = useState(false);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    });

    return (
        <td>
            <button type="button" ref={setReferenceElement} onClick={() => setShowPoppers(!showPoppers)}>
                Reference element {day}
            </button>

            {showPoppers && <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                Popper element
                <div ref={setArrowElement} style={styles.arrow} />
            </div>}
        </td>
    );
};

export default DayTdComponent;