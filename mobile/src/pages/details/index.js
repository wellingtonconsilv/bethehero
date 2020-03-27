import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';



import styles from './styles';
import logoImg from '../../assets/logo.png';



export default function Details() {
    const navigation = useNavigation();
    const route = useRoute();
    
    const incident = route.params.incident;
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de R$ ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}.`;


    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso - ${incident.title} `,
            recipients: [incident.email],
            body: message
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG: </Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>DESCRIPTION: </Text>
                <Text style={styles.incidentValue}>{incident.description} </Text>

                <Text style={styles.incidentProperty}>Valor: </Text>
                <Text style={styles.incidentValue}>
                    {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}
                </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.contactHeroTitle}>Salve o dia!</Text>
                <Text style={styles.contactHeroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.contactHeroDescription}>Entre em contato:</Text>

                <View style={styles.contactActions}>
                    <TouchableOpacity style={styles.contactAction} onPress={sendWhatsapp}>
                        <Text style={styles.contactActionText}>Whatsapp</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.contactAction} onPress={sendMail}>
                        <Text style={styles.contactActionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}