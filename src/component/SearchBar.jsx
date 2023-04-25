import React ,{useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Example from './Example';



const SearchBar = ({onAdd,term,searchHandler}) => {
    const inputRef=useRef('')
    
  const adderr=()=>{
   
    searchHandler(inputRef.current.value)
  }
  


  return (
    <Stack direction="horizontal" gap={3} className='search'>
    <Form.Control className="me-auto" type='text'  placeholder="Add your item here..."  ref={inputRef} onChange={adderr} value={term} />
    
    <Button variant="secondary"  id='srch' onClick={adderr} value={term}>search</Button>
    <div className="vr" />
    <Example  onAdd={onAdd}/>
  </Stack>

  ) 
}

export default SearchBar
