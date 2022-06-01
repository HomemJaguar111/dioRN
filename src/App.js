import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithhub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';

const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/95556375?v=4';

const urlToMyGithub = 'https://github.com/HomemJaguar111';

const App = () => {
  const handlePressGoToGithub = async () => {
    console.log('Verificando Link');
    const res = await Linking.canOpenURL(urlToMyGithub);

    if (res) {
      console.log('Link Aprovado');
      console.log('Abrindo o Link...');
      Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="João de gorro em uma paisagem de árvores"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />

        <Text
          accessibilityLabel="Nome: João Victor"
          style={[style.defaultText, style.name]}>
          {' '}
          João Victor
        </Text>
        <Text
          accessibilityLabel="Nickname: Homem JAguar cento e onze"
          style={[style.defaultText, style.nickname]}>
          HomemJaguar111
        </Text>
        <Text
          accessibilityLabel="Desrição: FrontEnd e Mobile Developer"
          style={[style.defaultText, style.description]}>
          FrontEnd e Mobile Developer
        </Text>

        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in GitHub
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithhub,
  },
  name: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGitHub,
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGitHub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
