class TextFieldView {
    static getReadWidget() {
        return '<StringColumn value={this.props.value} />';
    }

    static getLinkWidget() {
        return '<a onClick={this.props.detailAction}>' + TextFieldView.getReadWidget() + '</a>';
    }

    static getFilterWidget() {
        // @TODO : Add filter
        return null;
    }

    static getWriteWidget() {
        // @TODO : Use text input field (textarea) when implemented
        return '<InputField type={"text"} name={this.props.fieldName} value={this.props.value} updateField={this.props.updateField} />';
    }
}

export default TextFieldView;
