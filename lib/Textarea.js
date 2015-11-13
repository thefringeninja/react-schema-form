/**
 * Created by steve on 15/09/15.
 */
'use strict';

var React = require('react');
var utils = require('./utils');
var classNames = require('classnames');
var ValidationMixin = require('./ValidationMixin');

var Textarea = React.createClass({
    displayName: 'Textarea',

    mixins: [ValidationMixin],

    render: function render() {
        var formClasses = classNames('form-group', 'schema-form-textarea', { 'has-error': this.state.valid === false }, this.props.form.htmlClass, { 'has-success': this.state.valid === true && this.state.value != null });
        var labelClasses = classNames('control-label', this.props.form.labelHtmlClass);
        var fieldClasses = classNames('form-control', this.props.form.fieldHtmlClass);
        var help = this.props.form.description || '';
        if (!this.state.valid || this.props.form.description) {
            help = React.createElement(
                'div',
                { className: 'help-block' },
                this.state.error || this.props.form.description
            );
        }

        return React.createElement(
            'div',
            { className: formClasses },
            React.createElement(
                'label',
                { className: labelClasses },
                this.props.form.title
            ),
            React.createElement('textarea', { className: fieldClasses,
                id: this.props.form.key.slice(-1)[0],
                onChange: this.onChange,
                defaultValue: this.state.value,
                placeholder: this.props.form.placeholder,
                name: this.props.form.key.slice(-1)[0] }),
            help
        );
    }
});

module.exports = Textarea;