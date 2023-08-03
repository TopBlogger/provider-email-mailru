const nodemailer = require('nodemailer')

module.exports = {
    init: (providerOptions = {}, settings = {}) => {
        // create transport
        const transporter = nodemailer.createTransport(providerOptions)

        return {
            send: async options => {
                settings.to = options.to
                settings.html = options.html
                settings.subject = options.subject
                // send mail
                transporter.sendMail(settings, (error, info) => {
                    console.log(error || 'Email sent: ' + info.response)
                })
            }
        }
    },
}
