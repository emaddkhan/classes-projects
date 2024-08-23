// // // // import { StatusBar } from 'expo-status-bar'
// // // // import React, { Component } from 'react'
// // // // import { Text, View } from 'react-native'
// // // // import { SafeAreaView } from 'react-native-safe-area-context'
// // // // import styled from 'styled-components'
// // // // import { colors } from '../../utils/themes/colors'
// // // // import { Button, TextInput } from 'react-native-paper'
// // // // import { MaterialIcons } from '@expo/vector-icons'
// // // // import { AccountBackground, AccountCover, AccountCoverInsideContaine, OrText } from '../AccountsScreens/Account.Style'
// // // // import TextComponents from '../../components/TextComponent/TextComponents'

// // // // const Title = styled(Text)`
// // // //   font-size: ${(props) => props.theme.sizes[3]};
// // // //   font-weight: ${(props) => props.theme.fontWeights.regular};
// // // //   font-family: ${(props) => props.theme.fonts.body};
// // // //   color: ${colors.brand.white};
// // // //   padding-top: 65px;
// // // //   padding-left: 24%;
// // // // `

// // // // const CustomSafeAreaView = styled(SafeAreaView)`
// // // //   flex: 1;
// // // //   padding-top: ${StatusBar.currentHeight ? `${StatusBar.currentHeight}px` : '0px'};
// // // // `

// // // // const ErrorContainer = styled(View)`
// // // //   padding: 10px;
// // // //   margin-bottom: 15px;
// // // //   background-color: ${colors.text.error};
// // // //   border-radius: 5px;
// // // // `

// // // // export class RegisterScreen extends Component {
// // // //   render() {
// // // //     const buttonColor = '#6200ee';
// // // //     const { navigation } = this.props;
// // // //     const isError = true;
// // // //     return (
// // // //       <AccountBackground>
// // // //         <AccountCover />
// // // //         <Title>Login Screen</Title>
// // // //         <AccountCoverInsideContaine>

// // // //           <TextInput
// // // //             label="Email"
// // // //             underlineColor={buttonColor}
// // // //             activeUnderlineColor={buttonColor}
// // // //             keyboardType="email-address"
// // // //             textContentType="emailAddress"
// // // //             autoCapitalize="none"
// // // //           />

// // // //           <TextInput
// // // //             label="Password"
// // // //             underlineColor={buttonColor}
// // // //             activeUnderlineColor={buttonColor}
// // // //             secureTextEntry
// // // //             textContentType="password"
// // // //             autoCapitalize="none"
// // // //           />

// // // //           {/* {isError && (
// // // //             <ErrorContainer>
// // // //               <TextComponents variant="error">bhvk</TextComponents>
// // // //             </ErrorContainer>
// // // //           )} */}
// // // //           {isError && (
// // // //             <TextComponents variant="error">Invalid email or password</TextComponents>
// // // //           )}

// // // //           <Button 
// // // //           icon={() => <Icon name="person-add" size={20} color="#fff" />} 
// // // //           mode="contained" 
// // // //           onPress={() => console.log('Pressed')}>
// // // //                  Register
// // // //           </Button> 

// // // //           <OrText>---------- OR ----------</OrText>

// // // //           <Button
// // // //             icon={() => <MaterialIcons name="arrow-back" size={20} color="#fff" />}
// // // //             mode="contained"
// // // //             onPress={() => navigation.navigate("Home")}
// // // //           >
// // // //             Back
// // // //           </Button>

// // // //         </AccountCoverInsideContaine>
// // // //       </AccountBackground>
// // // //     )
// // // //   }
// // // // }

// // // // export default RegisterScreen
// // // import { StatusBar } from 'expo-status-bar';
// // // import React, { Component, useContext } from 'react';
// // // import { Text, View } from 'react-native';
// // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // import styled from 'styled-components';
// // // import { colors } from '../../utils/themes/colors';
// // // import { Button, TextInput } from 'react-native-paper';
// // // import { MaterialIcons } from '@expo/vector-icons';
// // // import { AccountBackground, AccountCover, AccountCoverInsideContaine, OrText } from '../AccountsScreens/Account.Style';
// // // import TextComponents from '../../components/TextComponent/TextComponents';
// // // import { AuthenticationContext } from '../../ContextApis/Authentication/Authentication.context';

// // // const Title = styled(Text)`
// // //   font-size: ${(props) => props.theme.sizes[3]};
// // //   font-weight: ${(props) => props.theme.fontWeights.regular};
// // //   font-family: ${(props) => props.theme.fonts.body};
// // //   color: ${colors.brand.white};
// // //   padding-top: 65px;
// // //   padding-left: 24%;
// // // `;

// // // const CustomSafeAreaView = styled(SafeAreaView)`
// // //   flex: 1;
// // //   padding-top: ${StatusBar.currentHeight ? `${StatusBar.currentHeight}px` : '0px'};
// // // `;

// // // export class RegisterScreen extends Component {
// // //   render() {
// // //     const buttonColor = '#6200ee';
// // //     const { navigation } = this.props;
// // //     const isError = true;
// // //     const {loading,onRegister,error} = useContext(AuthenticationContext);

// // //     return (
// // //       <AccountBackground>
// // //         <AccountCover />
// // //         <Title>Register Screen</Title>  
// // //         <AccountCoverInsideContaine>

// // //           <TextInput
// // //             label="Email"
// // //             underlineColor={buttonColor}
// // //             activeUnderlineColor={buttonColor}
// // //             keyboardType="email-address"
// // //             textContentType="emailAddress"
// // //             autoCapitalize="none"
// // //           />

// // //           <TextInput
// // //             label="Password"
// // //             underlineColor={buttonColor}
// // //             activeUnderlineColor={buttonColor}
// // //             secureTextEntry
// // //             textContentType="password"
// // //             autoCapitalize="none"
// // //           />

// // //           <TextInput
// // //             label="Confirm Password"
// // //             underlineColor={buttonColor}
// // //             activeUnderlineColor={buttonColor}
// // //             secureTextEntry
// // //             textContentType="password"
// // //             autoCapitalize="none"
// // //           />

// // //           {isError && (
// // //             <>
// // //             <TextComponents variant="error">Invalid email or password</TextComponents>
// // //             </>
            
// // //           )}

// // //           <Button
// // //             icon={() => <MaterialIcons name="person-add" size={20} color="#fff" />}  
// // //             mode="contained"
// // //             onPress={() => console.log('Pressed')}
// // //             loading={loading}
// // //           >
// // //             Register
// // //           </Button>

// // //           {/* <OrText>---------- OR ----------</OrText> */}

// // //           <Button
// // //             icon={() => <MaterialIcons name="arrow-back" size={20} color="#fff" />}
// // //             mode="contained"
// // //             onPress={() => navigation.navigate("Home")}
// // //           >
// // //             Back
// // //           </Button>

// // //         </AccountCoverInsideContaine>
// // //       </AccountBackground>
// // //     );
// // //   }
// // // }

// // // export default RegisterScreen;

// // import { StatusBar } from 'expo-status-bar';
// // import React, { Component, useContext } from 'react';
// // import { Text, View } from 'react-native';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // import styled from 'styled-components';
// // import { colors } from '../../utils/themes/colors';
// // import { Button, TextInput } from 'react-native-paper';
// // import { MaterialIcons } from '@expo/vector-icons';
// // import { AccountBackground, AccountCover, AccountCoverInsideContaine } from '../AccountsScreens/Account.Style';
// // import TextComponents from '../../components/TextComponent/TextComponents';
// // import { AuthenticationContext } from '../../ContextApis/Authentication/Authentication.context';

// // const Title = styled(Text)`
// //   font-size: ${(props) => props.theme.sizes[3]};
// //   font-weight: ${(props) => props.theme.fontWeights.regular};
// //   font-family: ${(props) => props.theme.fonts.body};
// //   color: ${colors.brand.white};
// //   padding-top: 65px;
// //   padding-left: 24%;
// // `;

// // const CustomSafeAreaView = styled(SafeAreaView)`
// //   flex: 1;
// //   padding-top: ${StatusBar.currentHeight ? `${StatusBar.currentHeight}px` : '0px'};
// // `;

// // export class RegisterScreen extends Component {
// //   render() {
// //     const buttonColor = '#6200ee';
// //     const { navigation } = this.props;
// //     const isError = true;
// //     const { loading, onRegister, error } = useContext(AuthenticationContext);

// //     return (
// //       <AccountBackground>
// //         <AccountCover />
// //         <Title>Register Screen</Title>
// //         <AccountCoverInsideContaine>
// //           <TextInput
// //             label="Email"
// //             underlineColor={buttonColor}
// //             activeUnderlineColor={buttonColor}
// //             keyboardType="email-address"
// //             textContentType="emailAddress"
// //             autoCapitalize="none"
// //           />

// //           <TextInput
// //             label="Password"
// //             underlineColor={buttonColor}
// //             activeUnderlineColor={buttonColor}
// //             secureTextEntry
// //             textContentType="password"
// //             autoCapitalize="none"
// //           />

// //           <TextInput
// //             label="Confirm Password"
// //             underlineColor={buttonColor}
// //             activeUnderlineColor={buttonColor}
// //             secureTextEntry
// //             textContentType="password"
// //             autoCapitalize="none"
// //           />

// //           {isError && (
// //             <TextComponents variant="error">Invalid email or password</TextComponents>
// //           )}

// //           <Button
// //             icon={() => <MaterialIcons name="person-add" size={20} color="#fff" />}
// //             mode="contained"
// //             onPress={() => console.log('Pressed')}
// //             loading={loading}
// //           >
// //             Register
// //           </Button>

// //           <Button
// //             icon={() => <MaterialIcons name="arrow-back" size={20} color="#fff" />}
// //             mode="contained"
// //             onPress={() => navigation.navigate('Home')}
// //           >
// //             Back
// //           </Button>
// //         </AccountCoverInsideContaine>
// //       </AccountBackground>
// //     );
// //   }
// // }

// // export default RegisterScreen;

// import { StatusBar } from 'expo-status-bar';
// import React, { useContext, useState } from 'react';
// import { Text, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import styled from 'styled-components';
// import { colors } from '../../utils/themes/colors';
// import { Button, TextInput } from 'react-native-paper';
// import { MaterialIcons } from '@expo/vector-icons';
// import { AccountBackground, AccountCover, AccountCoverInsideContaine } from '../AccountsScreens/Account.Style';
// import TextComponents from '../../components/TextComponent/TextComponents';
// import { AuthenticationContext } from '../../ContextApis/Authentication/Authentication.context';

// const Title = styled(Text)`
//   font-size: ${(props) => props.theme.sizes[3]};
//   font-weight: ${(props) => props.theme.fontWeights.regular};
//   font-family: ${(props) => props.theme.fonts.body};
//   color: ${colors.brand.white};
//   padding-top: 65px;
//   padding-left: 24%;
// `;

// const CustomSafeAreaView = styled(SafeAreaView)`
//   flex: 1;
//   padding-top: ${StatusBar.currentHeight ? `${StatusBar.currentHeight}px` : '0px'};
// `;

// const RegisterScreen = ({ navigation }) => {
//   const buttonColor = '#6200ee';
//   const isError = true;
//   const { loading, onRegister, error } = useContext(AuthenticationContext);
//   const [registerInfo,setRegisterInfo] = useState({
//     email:"",
//     password:"",
//     confirmpassword:"",
//   })

//   return (
//     <AccountBackground>
//       <AccountCover />
//       <Title>Register Screen</Title>
//       <AccountCoverInsideContaine>
//         <TextInput
//           label="Email"
//           underlineColor={buttonColor}
//           activeUnderlineColor={buttonColor}
//           keyboardType="email-address"
//           textContentType="emailAddress"
//           autoCapitalize="none"
//           value={registerInfo.email}
//           onChangeText={(text)=>setRegisterInfo({...registerInfo, email: text})}
//         />

//         <TextInput
//           label="Password"
//           underlineColor={buttonColor}
//           activeUnderlineColor={buttonColor}
//           secureTextEntry
//           textContentType="password"
//           autoCapitalize="none"
//           value={registerInfo.password}
//           onChangeText={(text)=>setRegisterInfo({...registerInfo, password: text})}
//         />

//         <TextInput
//           label="Confirm Password"
//           underlineColor={buttonColor}
//           activeUnderlineColor={buttonColor}
//           secureTextEntry
//           textContentType="password"
//           value={registerInfo.confirmpassword}
//           onChangeText={(text)=>setRegisterInfo({...registerInfo, confirmpassword: text})}
//           autoCapitalize="none"
//         />

//         {error && (
//           <TextComponents variant="error">{error}</TextComponents>
//         )}

//         <Button
//           icon={() => <MaterialIcons name="person-add" size={20} color="#fff" />}
//           mode="contained"
//           onPress={() => onRegister(registerInfo)}
//           loading={loading}
//         >
//           Register
//         </Button>

//         <Button
//           icon={() => <MaterialIcons name="arrow-back" size={20} color="#fff" />}
//           mode="contained"
//           onPress={() => navigation.navigate('Home')}
//         >
//           Back
//         </Button>
//       </AccountCoverInsideContaine>
//     </AccountBackground>
//   );
// }

// export default RegisterScreen;
// import { StatusBar } from 'expo-status-bar';
// import React, { useContext, useState } from 'react';
// import { Text } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import styled from 'styled-components';
// import { colors } from '../../utils/themes/colors';
// import { Button, TextInput } from 'react-native-paper';
// import { MaterialIcons } from '@expo/vector-icons';
// import { AccountBackground, AccountCover, AccountCoverInsideContaine } from '../AccountsScreens/Account.Style';
// import TextComponents from '../../components/TextComponent/TextComponents';
// import { AuthenticationContext } from '../../ContextApis/Authentication/Authentication.context';

// const Title = styled(Text)`
//   font-size: ${(props) => props.theme.sizes[3]};
//   font-weight: ${(props) => props.theme.fontWeights.regular};
//   font-family: ${(props) => props.theme.fonts.body};
//   color: ${colors.brand.white};
//   padding-top: 65px;
//   padding-left: 24%;
// `;

// const RegisterScreen = ({ navigation }) => {
//   const buttonColor = '#6200ee';
//   const { loading, onRegister, error } = useContext(AuthenticationContext);
//   const [registerInfo, setRegisterInfo] = useState({
//     email: "",
//     password: "",
//     confirmpassword: "",
//   });

//   const handleRegister = () => {
//     if (registerInfo.password !== registerInfo.confirmpassword) {
//       // Add client-side validation for password match here
//       console.log("Passwords do not match");
//       return;
//     }
//     onRegister(registerInfo);
//   };

//   return (
//     <AccountBackground>
//       <AccountCover />
//       <Title>Register Screen</Title>
//       <AccountCoverInsideContaine>
//         <TextInput
//           label="Email"
//           underlineColor={buttonColor}
//           activeUnderlineColor={buttonColor}
//           keyboardType="email-address"
//           textContentType="emailAddress"
//           autoCapitalize="none"
//           value={registerInfo.email}
//           onChangeText={(text) => setRegisterInfo({ ...registerInfo, email: text })}
//         />

//         <TextInput
//           label="Password"
//           underlineColor={buttonColor}
//           activeUnderlineColor={buttonColor}
//           secureTextEntry
//           textContentType="password"
//           autoCapitalize="none"
//           value={registerInfo.password}
//           onChangeText={(text) => setRegisterInfo({ ...registerInfo, password: text })}
//         />

//         <TextInput
//           label="Confirm Password"
//           underlineColor={buttonColor}
//           activeUnderlineColor={buttonColor}
//           secureTextEntry
//           textContentType="password"
//           value={registerInfo.confirmpassword}
//           onChangeText={(text) => setRegisterInfo({ ...registerInfo, confirmpassword: text })}
//           autoCapitalize="none"
//         />

//         {error && (
//           <TextComponents variant="error">{error}</TextComponents>
//         )}

//         <Button
//           icon={() => <MaterialIcons name="person-add" size={20} color="#fff" />}
//           mode="contained"
//           onPress={handleRegister}
//           loading={loading}
//           disabled={loading}
//         >
//           Register
//         </Button>

//         <Button
//           icon={() => <MaterialIcons name="arrow-back" size={20} color="#fff" />}
//           mode="contained"
//           onPress={() => navigation.navigate('Home')}
//         >
//           Back
//         </Button>
//       </AccountCoverInsideContaine>
//     </AccountBackground>
//   );
// };

// export default RegisterScreen;
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import { colors } from '../../utils/themes/colors';
import { Button, TextInput } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { AccountBackground, AccountCover, AccountCoverInsideContaine } from '../AccountsScreens/Account.Style';
import TextComponents from '../../components/TextComponent/TextComponents';
import { AuthenticationContext } from '../../ContextApis/Authentication/Authentication.context';

const Title = styled(Text)`
  font-size: ${(props) => props.theme.sizes[3]};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-family: ${(props) => props.theme.fonts.body};
  color: ${colors.brand.white};
  padding-top: 65px;
  padding-left: 24%;
`;

const RegisterScreen = ({ navigation }) => {
  const buttonColor = '#6200ee';
  const { loading, onRegister, error } = useContext(AuthenticationContext);
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "", // Fix the typo here
  });

  const handleRegister = () => {
    if (registerInfo.password !== registerInfo.confirmPassword) { // Match with state key
      console.log("Passwords do not match");
      return;
    }
    onRegister(registerInfo);
  };

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Register Screen</Title>
      <AccountCoverInsideContaine>
        <TextInput
          label="Email"
          underlineColor={buttonColor}
          activeUnderlineColor={buttonColor}
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          value={registerInfo.email}
          onChangeText={(text) => setRegisterInfo({ ...registerInfo, email: text })}
        />

        <TextInput
          label="Password"
          underlineColor={buttonColor}
          activeUnderlineColor={buttonColor}
          secureTextEntry
          textContentType="password"
          autoCapitalize="none"
          value={registerInfo.password}
          onChangeText={(text) => setRegisterInfo({ ...registerInfo, password: text })}
        />

        <TextInput
          label="Confirm Password"
          underlineColor={buttonColor}
          activeUnderlineColor={buttonColor}
          secureTextEntry
          textContentType="password"
          value={registerInfo.confirmPassword} // Fix the typo here
          onChangeText={(text) => setRegisterInfo({ ...registerInfo, confirmPassword: text })} // Match with state key
          autoCapitalize="none"
        />

        {error && (
          <TextComponents variant="error">{error}</TextComponents>
        )}

        <Button
          icon={() => <MaterialIcons name="person-add" size={20} color="#fff" />}
          mode="contained"
          onPress={handleRegister}
          loading={loading}
          disabled={loading}
        >
          Register
        </Button>

        <Button
          icon={() => <MaterialIcons name="arrow-back" size={20} color="#fff" />}
          mode="contained"
          onPress={() => navigation.navigate('Home')}
        >
          Back
        </Button>
      </AccountCoverInsideContaine>
    </AccountBackground>
  );
};

export default RegisterScreen;
