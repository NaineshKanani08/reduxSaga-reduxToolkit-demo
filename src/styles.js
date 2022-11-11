import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    title: {
        letterSpacing: "0.1rem",
        lineHeight: "1.25",
        marginBottom: "0.15rem",
        fontSize: "2rem"
    },
    form: {
        width: "90pw",
        maxWidth: "1170px",
        margin: "0 auto",
        marginTop: "3rem",
        marginBottom: "3rem"
    },
    error: {
        color: "#F93154",
        paddingTop: "0.5rem",
        fontSize: "2.15rem"
    },
    searchBtn: {
        marginTop: "8px !important",
        padding: "14px 10px !important",
        fontSize: "1rem !important"
    },
    section: {
        width: "90pw",
        maxWidth: "1170px",
        margin: "4rem auto",
        display: "flex",
        gap: "2rem"
    }

}))