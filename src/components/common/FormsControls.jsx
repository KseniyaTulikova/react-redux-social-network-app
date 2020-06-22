import styles from './FormsControls.module.css';
import React from 'react';
export const Textarea = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched;
    return (
        <div className = {(hasError ? styles.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            { hasError && <span className = { hasError && styles.error}>{meta.error}</span> }
        </div>
        
    );
}

export const Iput = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched;
    return (
        <div className = {(hasError ? styles.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
            { hasError && <span className = { hasError && styles.error}>{meta.error}</span> }
        </div>
        
    );
}