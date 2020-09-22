import React from 'react';
import {Formik, Field, Form} from 'formik'
import {FilterType} from '../../redux/users_reducer'
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store-redux";

type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}

const UsersSearchForm: React.FC<PropsType> = (props) => {

  const filter = useSelector((state: AppStateType) => state.usersPage.filter)
  const submit = (values: FormType, {setSubmitting} : {setSubmitting: (isSubmitting: boolean) => void}) => {

    let friendsValue = {
      term: values.term,
      friends: values.friends === "null" ? null : values.friends ? true : false
    }
    
    props.onFilterChanged(friendsValue)
    setSubmitting(false)
  }
  
    return <div className="pageArea">
      <Formik
        enableReinitialize
        initialValues={{ term: filter.term, friends: String(filter.friends) as FriendFormType}}
        validate={values => {
          const errors = {};
          return errors;
        }}
        onSubmit = {submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" placeholder='Enter name...'/>
            <Field name="friends" as="select" placeholder="Favorite Color" style={{marginLeft: '10px'}}>
              <option value="true">Friends</option>
              <option value="false">Unfollowed users</option>
              <option value="null">All users</option>
            </Field>
            <button type="submit" className="btn" disabled={isSubmitting}>
              Find
            </button>
          </Form>
        )}
      </Formik>
    </div>
}
  
  export default UsersSearchForm;

type FriendFormType = "true" | "false" | "null"

type FormType = {
  term: string
  friends: FriendFormType
}

