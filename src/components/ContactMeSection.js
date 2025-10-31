import React, { useEffect } from "react"; 
import { useFormik } from "formik"; 
import { 
  Box, 
  Button, 
  FormControl, 
  FormErrorMessage, 
  FormLabel, 
  Heading, 
  Input, 
  Select, 
  Textarea, 
  VStack, 
} from "@chakra-ui/react"; 
import * as Yup from "yup"; 
import FullScreenSection from "./FullScreenSection"; 
import useSubmit from "../hooks/useSubmit"; 
import { useAlertContext } from "../context/alertContext"; 

const ContactMeSection = () => { 
  const { isLoading, response, submit } = useSubmit(); 
  const { onOpen } = useAlertContext(); 

  const formik = useFormik({ 
    initialValues: { 
      firstName: "", 
      email: "", 
      type: "hireMe", 
      comment: "", 
    }, 
    onSubmit: (values) => { 
      submit("https://john.com/contactme", values); 
    }, 
    validationSchema: Yup.object({ 
      firstName: Yup.string().required("Required"), 
      email: Yup.string().email("Invalid email address").required("Required"), 
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Required"), 
    }), 
  }); 

  useEffect(() => { 
    if (response) { 
      onOpen(response.type, response.message); 
      if (response.type === "success") { 
        formik.resetForm(); 
      } 
    } 
  }, [response]); 

  return ( 
    <FullScreenSection
      backgroundColor="#ffffffff" 
      py={{ base: 8, md: 16 }} 
      px={{ base: 4, md: 16 }} 
    > 
      <VStack 
        w="full" 
        maxW={{base: "100%", md: "1024px", "lg": "1280px"}}
        mx="auto" 
        spacing={8} 
        alignItems="flex-start"
      > 
        <Heading as="h1" id="contactme-section" color="gray.700" fontSize={{ base: "2xl", md: "4xl" }}> 
          Contact me 
        </Heading> 

        <Box 
          w="full" 
          p={{ base: 6, md: 8 }} 
          rounded="md" 
          color="black" 
          border="1px solid #e2e8f0"
          bg="white"
          boxShadow="sm"
        > 
          <form onSubmit={formik.handleSubmit}> 
            <VStack spacing={4}> 
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}> 
                <FormLabel htmlFor="firstName" color="gray.600">Name</FormLabel> 
                <Input 
                  id="firstName" 
                  name="firstName" 
                  borderColor="gray.300"
                  {...formik.getFieldProps("firstName")} 
                /> 
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> 
              </FormControl> 

              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}> 
                <FormLabel htmlFor="email" color="gray.600">Email Address</FormLabel> 
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  borderColor="gray.300"
                  {...formik.getFieldProps("email")} 
                /> 
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
              </FormControl> 

              <FormControl> 
                <FormLabel color="gray.600" htmlFor="type">Reason to connect</FormLabel> 
                <Select 
                  id="type" 
                  name="type" 
                  {...formik.getFieldProps("type")} 
                  bg="gray.100"
                > 
                  <option value="hireMe">Let's collaborate on a project</option> 
                  <option value="openSource">Work on Python ML/AI Project</option> 
                  <option value="studyTogether">Request for Resume</option> 
                  <option value="other">Other</option> 
                </Select> 
              </FormControl> 

              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}> 
                <FormLabel htmlFor="comment" color="gray.600">Your message</FormLabel> 
                <Textarea 
                  id="comment" 
                  name="comment" 
                  minH={{ base: "150px", md: "250px" }} 
                  borderColor="gray.300"
                  {...formik.getFieldProps("comment")} 
                /> 
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage> 
              </FormControl> 

              <Button 
                type="submit" 
                color="white" 
                bg="blue.600" 
                _hover={{ bg: "blue.700" }} 
                width="full" 
                isLoading={isLoading}
              > 
                Submit 
              </Button> 
            </VStack> 
          </form> 
        </Box> 
      </VStack> 
    </FullScreenSection> 
  ); 
}; 
 
export default ContactMeSection;