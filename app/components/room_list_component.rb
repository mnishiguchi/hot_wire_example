# frozen_string_literal: true

class RoomListComponent < ViewComponent::Base
  def initialize(rooms:)
    @rooms = rooms
  end

end
