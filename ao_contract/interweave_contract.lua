local ao = require('ao')
local json = require('json')

local ApiDetails = {
    ["1"] = {
        { id = 0, type = "data", name = "Climate Data Api", description = "Some Description", provider = "ABC ORG", icon = "icon" },
        { id = 1, type = "data", name = "Climate Data Api", description = "Some Description", provider = "ABC ORG", icon = "icon" },
    }
}

Handlers.add('add_api_details', Handlers.utils.hasMatchingTag('Action', 'AddApiDetails'), function(msg)
    if not ApiDetails[msg.key] then
        Handlers.utils.reply("Invalid key provided")(json.encode({ error = "Invalid key" }))
        return
    end

    local newId = #ApiDetails[msg.key] + 1

    local newApiItem = {
        id = newId,
        type = msg.type,
        name = msg.name,
        description = msg.description,
        provider = msg.provider,
        icon = msg.icon
    }

    table.insert(ApiDetails[msg.key], newApiItem)

    Handlers.utils.reply("New API Added")(json.encode(newApiItem))
end)

Handlers.add('get_api_details', Handlers.utils.hasMatchingTag('Action', 'GetApiDetails'), function(msg)
    local response = {
        message = "Current API details",
        data = ApiDetails
    }

    ao.send({ Target = msg.From, Data = json.encode(response) })
end)
