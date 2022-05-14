import { Component } from "react";

class ErrorBoundary extends Component {

    state = {
        error: false
    }

    //* как вариант чтобы поменять state при ошибке, но больше ничего делать не может по сравнению с componentDidCatch
    // static getDerivedStateFromError(error) {
    //     return {error: true};
    // }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        this.setState({
            error: true
        });
    }

    render() {
        if (this.state.error) {
            return <p style={ { margin: "0 auto" } }>Ошибочка</p>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
