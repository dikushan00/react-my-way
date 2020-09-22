import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import photoUser from '../../img/user.svg'
import { AppStateType } from '../../redux/store-redux'
import { UserType } from '../../Types/Types'

const HeaderSearchForm = () => {

    const friends = useSelector((state: AppStateType) => state.usersPage.friends)
    const [searchFriends, setSearchFriends] = useState([])
    const [isFocuced, setIsFocused] = useState(false)

    const submit = (values: FormValuesType, {setSubmitting} : {setSubmitting: (isSubmitting: boolean) => void}) => {
        setSubmitting(false)
        let searchFriends  = friends.filter((item: UserType) => {
            return item.name && item.name.toLowerCase().includes(values.fullName)
        }) as Array<UserType>
        //@ts-ignore
        setSearchFriends(searchFriends)
        console.log(values.fullName)
        console.log(searchFriends)
    }

    const toggleFocus = () => {
        const flag = !isFocuced
        setIsFocused(flag)
    }

    function onClickClose(elem: HTMLElement) {
        function outsideClickListener(event: any) {
            if (elem && !elem.contains(event.target) && isVisible(elem)) { 
                setIsFocused(false)
                 document.removeEventListener('click', outsideClickListener);
            }
        }
        document.addEventListener('click', outsideClickListener)
    }
    
    document.addEventListener("click", () => {  
        const accountDrop = document.getElementById("subResulSearch"); 
        //@ts-ignore
        onClickClose(accountDrop)
    })

    function isVisible(elem: HTMLElement) {
        return !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
    }

    return <div style = {{position: "relative"}}>
        <Formik
            initialValues =  {{
                fullName: "",
            }}
            onSubmit = {submit}>
            {
                ({values, handleChange, submitForm}) => (
                <Form style = {{position: "relative"}}>
                    <Field type = "text" name = "fullName" autocomplete="off" onFocus = {toggleFocus} placeholder = "Enter name..." value = {values.fullName} onChange = {(e: any) => {handleChange(e); setTimeout(submitForm, 0)}} style = {{borderRadius: "20px", border: "1px", outline: "none", height: "22px", padding: "5px 19px"}}/>
                    <FontAwesomeIcon icon = {faSearch} style = {{position: "absolute", top: "8px", right: "12px", color: "#4a76a8"}}/>
                </Form>
                )
            }
        </Formik>
        {
            searchFriends.length > 0 && isFocuced && 
                <div id = "subResulSearch" onClick = {() => setTimeout(() => setIsFocused(false), 100) } style = {{display: "flex", flexDirection: "column", border: "1px solid #ccc", width: "196px", borderRadius: "5px", position: "absolute", top: "36px", background: "#fff", padding: "20px", zIndex: 1005}}>
                        {searchFriends.map((item, index) => {
                            if(index < 7){
                                return <div style = {{display: "flex", height: "30px", marginTop: "10px"}}>
                                {/*@ts-ignore */}
                                    {<NavLink to={`/profile/${item.id}`}>
                                        {/*@ts-ignore */}
                                        <img src={item.photos.large ? item.photos.large : photoUser} style = {{width: "25px", height: "25px", margin: 0, borderRadius: "50%"}} alt="PHOTOS"/>
                                        {/*@ts-ignore */}
                                        <span style = {{marginLeft: "15px"}}>{item.name}</span>
                                    </NavLink>}
                                </div>}
                        })}
                    </div> 
        }    
    </div>
}

export default HeaderSearchForm

type FormValuesType = {
    fullName: string
}