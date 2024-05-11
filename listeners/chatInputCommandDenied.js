const { Listener } = require('@sapphire/framework');

class chatInputCommandDenied extends Listener {
    constructor(context, options) {
        super(context, {
          ...options,
          once: false,
          event: 'chatInputCommandDenied'
        });
      }
    run(error, { interaction }) {
      if (interaction.deferred || interaction.replied) {
        return interaction.editReply({
          content: `:x: ${error}`
        });
      }

      return interaction.reply({
        content: `:x: ${error}`,
        ephemeral: true
      });
    }
}
module.exports = {
  chatInputCommandDenied
};