import { StyleSheet} from 'react-native';

import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    incidentList: {
        marginTop: 32
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 48
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414b',
        fontWeight: 'bold',
        marginTop: 24
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },

    contactHeroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30
    },

    contactHeroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },

    contactActions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    contactAction: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    contactActionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
});