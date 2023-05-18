import React from "react";
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

const Searchbar = ({ onInput, onSubmit }) => (   
        <header className={css.searchbar}>
            <form className={css.searchform} onSubmit={onSubmit}>
                <button type="submit" className={css.searchform_button}>
                    <span className={css.searchform_button_label}>Search</span>
                </button>

                <input
                    className={css.searchform_input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={onInput}
                />
            </form>
        </header>
          
)

Searchbar.propTypes = {
    onInput: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default Searchbar;