import React from 'react';
import { store } from 'react-notifications-component';

interface NotifyProps {
    type: 'success' | 'danger' | 'info' | 'default' | 'warning',
    title: string;
    message: string;
}

export function Notify(values: NotifyProps) {

    const { type, title, message } = values;

    store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        
        dismiss: {
            showIcon: true,
            duration: 5000,
            onScreen: true
        }
    });

}

